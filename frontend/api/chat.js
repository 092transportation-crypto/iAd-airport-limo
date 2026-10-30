// Vercel serverless function backing the site's live chat widget.
// Self-contained, matching api/quote-requests.js's style — no shared
// lib/http.js. Calls the Anthropic Messages API directly via fetch (no SDK).
//
// Required environment variables (set in Vercel project settings):
//   ANTHROPIC_API_KEY       — Anthropic API key. Without it, the endpoint
//                             still responds 200 with a friendly fallback —
//                             it never crashes or 500s for a missing key.
//   ANTHROPIC_CHAT_MODEL    — optional, defaults to claude-haiku-5-5
// The submit_booking_lead tool also uses TWILIO_ACCOUNT_SID,
// TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, ALERT_PHONE_NUMBER and
// LEAD_WEBHOOK_URL — see lib/sms.js and lib/leadWebhook.js.

const { sendSms } = require('../lib/sms.js');
const { notifyLeadWebhook } = require('../lib/leadWebhook.js');
const { computeQuote } = require('./_pricing.js');
const { getDistanceMiles } = require('./distance.js');

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_VERSION = '2023-06-01';
const ANTHROPIC_TIMEOUT_MS = 30000;
const MAX_TOKENS = 1024;

const PHONE_DISPLAY = '(877) 609-1919';

const FALLBACK_NO_KEY =
  `Thanks for reaching out! Live chat isn't available right now, but our ` +
  `team is standing by 24/7 at ${PHONE_DISPLAY}. You can also get an ` +
  `instant quote and book online at /book-now.`;

const FALLBACK_ERROR =
  `Sorry, I'm having trouble connecting right now. Please call us at ` +
  `${PHONE_DISPLAY} or book directly at /book-now and our team will take ` +
  `great care of you.`;

const FALLBACK_GENERIC =
  `I can help with pricing, our fleet, or booking a ride. You can also ` +
  `reach a dispatcher any time at ${PHONE_DISPLAY}.`;

// ---------------------------------------------------------------------------
// Real site facts (kept in sync with src/pages/FleetPage.jsx and
// api/_pricing.js — never invent vehicles or numbers here).
// ---------------------------------------------------------------------------

const SYSTEM_PROMPT = `You are the live chat assistant for IAD Airport Limo (iadairportlimo.com), a licensed and insured chauffeured car service (Maryland PSC Carrier #6325) serving Washington Dulles International Airport (IAD), Reagan National (DCA), BWI, and the greater Washington DC / Maryland / Virginia area, 24/7.

REAL FACTS — use only these, never invent others:
- Phone (call or text): ${PHONE_DISPLAY}
- Email: limoiadairport@gmail.com
- Office: 9836 Lyon Ave, Laurel, MD 20723
- Online booking / instant quote form: /book-now
- Our fleet (7 vehicle classes — this is the full, real list):
  • Business Sedan — Mercedes-Benz E-Class or similar — 3 passengers, 2 bags
  • First Class Sedan — BMW 7 Series / Mercedes S-Class or similar — 3 passengers, 2 bags
  • Midsize SUV — Lincoln Nautilus or similar — 3 passengers, 4 bags
  • Luxury SUV — Chevrolet Suburban or similar — 5 passengers, 5 bags
  • Premium SUV — 2026 Lincoln Navigator or similar — 6 passengers, 5 bags
  • Sprinter Shuttle — Mercedes Sprinter or similar — up to 13 passengers
  • Sprinter Executive — Mercedes Sprinter or similar — up to 13 passengers, executive interior
- Services: airport transfers, corporate travel, wedding transportation, prom/school events, wine tours, concerts/events, hourly charter.
- Cancellation policy: Sedans and SUVs can be cancelled free up to 3 hours before pickup. Sprinter vans, limousines and special events can be cancelled free up to 12 hours before pickup.

TONE: Warm, concise, professional chauffeur-service tone. Keep replies to 2-4 sentences unless you're listing the fleet.

STRICT RULES — never break these:
1. Never state a specific dollar price yourself. The ONLY prices you may say are numbers that come back from a get_instant_quote tool result. If you don't have a real tool result, explain that pricing depends on distance and vehicle, and offer to collect trip details so a dispatcher can send an exact quote.
2. Never claim to know real-time calendar availability for any date — there is no live booking calendar. Say the fleet is large and availability is usually open, and offer to collect trip details so a dispatcher can confirm.
3. When asked what cars/vehicles are available, use the REAL fleet list above — never invent vehicles.
4. When asked how to book, point to the /book-now page and/or the phone number ${PHONE_DISPLAY}.
5. After 2-3 exchanges, or as soon as the visitor shows booking interest (asks about price, availability, or says they want a ride), ask: "Would you like to book a ride? I can get you a quote right now." If they say yes, collect these ONE AT A TIME — ask a single question, wait for the answer, then ask the next — in this order: name, phone number, pickup location, destination, date, time. Once you have all six, call submit_booking_lead with those six fields. Do not ask for more than one of these in a single message.
6. If the visitor gives you both a pickup and a destination and wants to know the cost, you may call get_instant_quote(pickup, dropoff, vehicle) to get a REAL fare instead of guessing. If it's not available or doesn't return a usable result, fall back to rule 1.`;

const TOOLS = [
  {
    name: 'submit_booking_lead',
    description:
      'Capture a booking lead. Call this ONLY once you have collected all six fields from the visitor in conversation: name, phone, pickup, destination, date, and time.',
    input_schema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: "Customer's full name" },
        phone: { type: 'string', description: "Customer's phone number" },
        pickup: { type: 'string', description: 'Pickup location or address' },
        destination: { type: 'string', description: 'Drop-off destination' },
        date: { type: 'string', description: 'Trip date, as given by the customer' },
        time: { type: 'string', description: 'Trip time, as given by the customer' },
      },
      required: ['name', 'phone', 'pickup', 'destination', 'date', 'time'],
    },
  },
  {
    name: 'get_instant_quote',
    description:
      'Get a REAL instant fare estimate for a specific pickup and dropoff, optionally for a specific vehicle class. Use this instead of guessing a price whenever the visitor has given both a pickup and a destination and wants to know the cost. Do not call this with vague or missing locations.',
    input_schema: {
      type: 'object',
      properties: {
        pickup: { type: 'string', description: 'Pickup address or location' },
        dropoff: { type: 'string', description: 'Destination address or location' },
        vehicle: {
          type: 'string',
          description:
            'Vehicle class the visitor wants (e.g. "Business Sedan", "Luxury SUV", "Sprinter Shuttle"). Omit if not specified.',
        },
      },
      required: ['pickup', 'dropoff'],
    },
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const clip = (v, max) => String(v ?? '').trim().slice(0, max);

const MAX_MESSAGES = 20;
const MAX_CONTENT_LEN = 4000;

/** Keep only well-formed {role, content} turns, clipped and capped. */
function formatMessages(raw) {
  const cleaned = raw
    .filter(
      (m) =>
        m &&
        typeof m === 'object' &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim() !== ''
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CONTENT_LEN) }));

  const trimmed = cleaned.slice(-MAX_MESSAGES);
  // Anthropic requires the conversation to start with a user turn.
  while (trimmed.length && trimmed[0].role !== 'user') trimmed.shift();
  return trimmed;
}

// Real fleet name -> api/_pricing.js PRICING key. Order matters: more
// specific patterns are checked before the generic "sedan" fallback.
const VEHICLE_ALIASES = [
  { key: 'Sprinter Executive', patterns: ['sprinter executive', 'executive sprinter', 'executive van'] },
  { key: 'Sprinter Van', patterns: ['sprinter shuttle', 'sprinter van', 'shuttle', 'sprinter'] },
  { key: 'Premium SUV', patterns: ['premium suv', 'escalade'] },
  { key: 'Luxury SUV', patterns: ['luxury suv', 'suburban'] },
  { key: 'Mid-Size SUV', patterns: ['midsize suv', 'mid-size suv', 'mid size suv', 'nautilus', 'suv'] },
  { key: 'First Class', patterns: ['first class', 'bmw', 's-class', 'sclass'] },
  { key: 'Business Sedan', patterns: ['business sedan', 'e-class', 'eclass', 'sedan'] },
];

function normalizeVehicle(input) {
  const s = String(input ?? '').trim().toLowerCase();
  if (!s) return 'Business Sedan';
  for (const { key, patterns } of VEHICLE_ALIASES) {
    if (patterns.some((p) => s.includes(p))) return key;
  }
  return 'Business Sedan';
}

async function callAnthropic(apiKey, model, payload) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ANTHROPIC_TIMEOUT_MS);
  try {
    const res = await fetch(ANTHROPIC_URL, {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': ANTHROPIC_VERSION,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ model, max_tokens: MAX_TOKENS, ...payload }),
      signal: controller.signal,
    });
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      const msg = data && data.error && data.error.message ? data.error.message : `HTTP ${res.status}`;
      throw new Error(`Anthropic API error: ${msg}`);
    }
    return data;
  } finally {
    clearTimeout(timer);
  }
}

/** submit_booking_lead: validate/clip, fire SMS + webhook, compose the reply ourselves. */
async function handleBookingLead(input) {
  const name = clip(input && input.name, 120) || 'Website visitor';
  const phone = clip(input && input.phone, 40);
  const pickup = clip(input && input.pickup, 300);
  const destination = clip(input && input.destination, 300);
  const date = clip(input && input.date, 40);
  const time = clip(input && input.time, 40);

  const smsBody = [
    'New chat booking lead — IAD Airport Limo',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Pickup: ${pickup}`,
    `Destination: ${destination}`,
    `Date: ${date}`,
    `Time: ${time}`,
  ].join('\n');

  const webhookPayload = {
    source: 'chat_widget',
    name,
    phone,
    pickup,
    destination,
    date,
    time,
    submitted_at: new Date().toISOString(),
  };

  // Promise.allSettled — neither alert can fail or block the chat reply.
  await Promise.allSettled([sendSms(smsBody), notifyLeadWebhook(webhookPayload)]);

  const firstName = name.split(' ')[0] || 'there';
  const tripBits = [pickup && `from ${pickup}`, destination && `to ${destination}`]
    .filter(Boolean)
    .join(' ');
  const whenBits = [date, time].filter(Boolean).join(' at ');

  return (
    `Thanks, ${firstName}! I've got your trip` +
    `${tripBits ? ` ${tripBits}` : ''}${whenBits ? ` on ${whenBits}` : ''} — ` +
    `our dispatch team will call or text you at ${phone || 'the number you gave'} shortly to confirm your ride.`
  );
}

/** get_instant_quote: real distance + pricing math — never a guessed number. */
async function handleInstantQuote(input) {
  const pickup = clip(input && input.pickup, 300);
  const dropoff = clip(input && input.dropoff, 300);
  const vehicle = normalizeVehicle(input && input.vehicle);

  if (pickup.length < 4 || dropoff.length < 4) {
    return { success: false, reason: 'Pickup and destination were not specific enough to price.' };
  }

  try {
    const { miles } = await getDistanceMiles(pickup, dropoff);
    const quote = computeQuote(miles, vehicle, false);
    if (!quote) {
      return { success: false, reason: `No instant pricing available for ${vehicle}.` };
    }
    if (quote.overLimit) {
      return {
        success: false,
        reason: `This trip is about ${quote.miles} miles, which is over our 150-mile instant-quote limit. A dispatcher can put together a custom quote.`,
      };
    }
    return {
      success: true,
      vehicle,
      miles: quote.miles,
      base_fare: quote.baseFare,
      discount: quote.discount,
      card_fee: quote.cardFee,
      total: quote.total,
      note: 'Estimate only — a short-notice surcharge may apply for pickups within 4 hours, and the final quote is confirmed at booking.',
    };
  } catch (err) {
    console.error('get_instant_quote distance lookup failed:', err && err.message);
    return { success: false, reason: "Couldn't calculate the distance for those addresses." };
  }
}

/** Plain-language reply if the follow-up Claude call (to phrase the quote) fails. */
function composeQuoteFallback(q) {
  if (!q || !q.success) {
    return (
      `I wasn't able to put together an exact fare for that trip` +
      `${q && q.reason ? ` (${q.reason})` : ''}. Pricing depends on distance and vehicle — ` +
      `want me to collect your trip details so a dispatcher can send you an exact quote?`
    );
  }
  return (
    `For a ${q.vehicle} over about ${q.miles} miles, the estimated fare is $${q.total.toFixed(2)} ` +
    `(includes our 10% online-booking discount). Would you like to book this ride?`
  );
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const rawMessages = Array.isArray(body.messages) ? body.messages : [];
  const messages = formatMessages(rawMessages);

  if (messages.length === 0) {
    return res.status(200).json({
      reply: "Hi! I'm the IAD Airport Limo assistant — ask me about pricing, our fleet, or booking a ride.",
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    // Never crash on a missing key — a friendly, honest fallback instead.
    return res.status(200).json({ reply: FALLBACK_NO_KEY });
  }

  const model = process.env.ANTHROPIC_CHAT_MODEL || 'claude-haiku-5-5';

  try {
    const first = await callAnthropic(apiKey, model, {
      system: SYSTEM_PROMPT,
      tools: TOOLS,
      messages,
    });

    const content = Array.isArray(first && first.content) ? first.content : [];
    const toolUseBlocks = content.filter((b) => b && b.type === 'tool_use');

    if (toolUseBlocks.length === 0) {
      const text = content
        .filter((b) => b && b.type === 'text')
        .map((b) => b.text)
        .join('\n')
        .trim();
      return res.status(200).json({ reply: text || FALLBACK_GENERIC });
    }

    const bookingBlock = toolUseBlocks.find((b) => b.name === 'submit_booking_lead');
    if (bookingBlock) {
      const reply = await handleBookingLead(bookingBlock.input || {});
      return res.status(200).json({ reply, leadCaptured: true });
    }

    const quoteBlock = toolUseBlocks.find((b) => b.name === 'get_instant_quote');
    if (quoteBlock) {
      const quoteResult = await handleInstantQuote(quoteBlock.input || {});

      try {
        const followup = await callAnthropic(apiKey, model, {
          system: SYSTEM_PROMPT,
          tools: TOOLS,
          messages: [
            ...messages,
            { role: 'assistant', content },
            {
              role: 'user',
              content: [
                {
                  type: 'tool_result',
                  tool_use_id: quoteBlock.id,
                  content: JSON.stringify(quoteResult),
                },
              ],
            },
          ],
        });

        const followupContent = Array.isArray(followup && followup.content) ? followup.content : [];
        const followupText = followupContent
          .filter((b) => b && b.type === 'text')
          .map((b) => b.text)
          .join('\n')
          .trim();

        return res.status(200).json({ reply: followupText || composeQuoteFallback(quoteResult) });
      } catch (err) {
        console.error('Follow-up Anthropic call failed:', err && err.message);
        return res.status(200).json({ reply: composeQuoteFallback(quoteResult) });
      }
    }

    // An unrecognized tool was requested — respond gracefully rather than hang.
    return res.status(200).json({ reply: FALLBACK_GENERIC });
  } catch (err) {
    console.error('Chat endpoint error:', err && err.message ? err.message : err);
    return res.status(200).json({ reply: FALLBACK_ERROR });
  }
};

// Give the Anthropic round-trip(s) + fire-and-forget alerts room to finish.
module.exports.config = { maxDuration: 60 };
