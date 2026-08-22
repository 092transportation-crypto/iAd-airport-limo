// Vercel serverless function: receives booking/contact form submissions and
// emails them to the team via Gmail SMTP.
//
// Required environment variables (set in Vercel project settings):
//   SMTP_USER          — Gmail address used to send
//   SMTP_PASSWORD      — 16-character Gmail app password
//   NOTIFICATION_EMAIL — where booking notifications are delivered (defaults to SMTP_USER)

const nodemailer = require('nodemailer');
const crypto = require('crypto');
const { computeQuote } = require('./_pricing.js');

const escapeHtml = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const field = (v, max) => String(v ?? '').trim().slice(0, max);

// "2026-10-21" + "17:32" -> "October 21, 2026 at 5:32 PM".
// Parses the parts directly (no Date-from-ISO-string) so the customer's chosen
// date/time is never shifted by the server's timezone. Falls back to the raw
// strings if they don't match the expected <input type=date|time> formats.
function formatDateTime(date, time) {
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  const dm = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  const prettyDate = dm
    ? `${MONTHS[Number(dm[2]) - 1]} ${Number(dm[3])}, ${dm[1]}`
    : date;
  const tm = /^(\d{1,2}):(\d{2})/.exec(time);
  let prettyTime = time;
  if (tm) {
    const h = Number(tm[1]);
    const suffix = h >= 12 ? 'PM' : 'AM';
    prettyTime = `${h % 12 || 12}:${tm[2]} ${suffix}`;
  }
  if (prettyDate && prettyTime) return `${prettyDate} at ${prettyTime}`;
  return prettyDate || prettyTime || '';
}

const usd = (v) => `$${Number(v || 0).toFixed(2)}`;
const CUSTOM_QUOTE_TEXT = 'Custom quote requested — no instant price calculated';

/**
 * Normalize the instant-quote pricing the form submits so the notification
 * email can show the fare breakdown. When the client says an instant price
 * was shown, the fare is RECOMPUTED here from miles + vehicle (same bracket
 * math as the Stripe endpoint) so the email always reflects our rate table.
 *
 *   { mode: 'instant', vehicle, vehicle_label, miles, base_fare, discount,
 *     surcharge, short_notice, card_fee, total, paid, payment_intent }
 *   { mode: 'custom', reason }   // Hourly / Wedding / Special Event, no
 *                                 // vehicle, over 150 miles, no distance …
 */
function normalizePricing(raw) {
  if (!raw || typeof raw !== 'object') {
    return { mode: 'custom', reason: 'No pricing data submitted' };
  }
  if (raw.mode !== 'instant') {
    return { mode: 'custom', reason: field(raw.reason, 200) || 'Custom quote' };
  }
  const miles = Number(raw.miles);
  const vehicle = field(raw.vehicle, 40);
  // The surcharge the customer saw is the source of truth for short notice.
  const shortNotice = Boolean(raw.short_notice) || Number(raw.surcharge) > 0;
  const q = computeQuote(miles, vehicle, shortNotice);
  if (!q) return { mode: 'custom', reason: 'Vehicle has no instant pricing' };
  if (q.overLimit) {
    return { mode: 'custom', reason: `Trip is ${q.miles} miles (over the 150-mile instant-quote limit)` };
  }
  return {
    mode: 'instant',
    vehicle,
    vehicle_label: field(raw.vehicle_label, 60) || vehicle,
    miles: q.miles,
    base_fare: q.baseFare,
    discount: q.discount,
    surcharge: q.surcharge,
    short_notice: shortNotice,
    card_fee: q.cardFee,
    total: q.total,
    paid: Boolean(raw.paid),
    payment_intent: field(raw.payment_intent, 80),
  };
}

/** [label, value] rows for the pricing section of the email. */
function pricingRows(p) {
  if (p.mode !== 'instant') {
    return [['Pricing', `${CUSTOM_QUOTE_TEXT}${p.reason ? ` (${p.reason})` : ''}`]];
  }
  return [
    ['Vehicle', p.vehicle_label],
    ['Distance', `${p.miles} miles`],
    ['Base fare', usd(p.base_fare)],
    ['Discount (10%)', `-${usd(p.discount)}`],
    ...(p.surcharge > 0 ? [['Short-notice surcharge (20%)', `+${usd(p.surcharge)}`]] : []),
    ['Card fee (3%)', `+${usd(p.card_fee)}`],
    ['TOTAL', usd(p.total)],
    [
      'Payment',
      p.paid
        ? `Paid online via Stripe${p.payment_intent ? ` (${p.payment_intent})` : ''}`
        : 'Not paid online — instant quote only',
    ],
  ];
}

function pricingSubjectSuffix(p) {
  if (p.mode !== 'instant') return 'Custom quote';
  return `${usd(p.total)}${p.paid ? ' PAID' : ''}`;
}

// Human-readable submission stamp in the business's timezone (Washington, DC).
function formatSubmittedAt(d) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    month: 'long', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit', hour12: true,
    timeZoneName: 'short',
  }).format(d);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const recipient = process.env.NOTIFICATION_EMAIL || smtpUser;
  if (!smtpUser || !smtpPassword) {
    console.error('SMTP_USER / SMTP_PASSWORD not configured');
    return res.status(500).json({ success: false, message: 'Email service not configured' });
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const inquiry = {
    name: field(body.name, 120) || 'Website Visitor',
    email: field(body.email, 200),
    phone: field(body.phone, 40),
    preferred_contact: field(body.preferred_contact, 20),
    service_type: field(body.service_type || body.subject, 80) || 'General inquiry',
    flight_number: field(body.flight_number, 40),
    vehicle_type: field(body.vehicle_type, 80),
    pickup_location: field(body.pickup_location, 300),
    dropoff_location: field(body.dropoff_location, 300),
    date: field(body.date, 40),
    time: field(body.time, 40),
    passengers: field(body.passengers, 10),
    message: field(body.message, 2000),
    source: field(body.source, 40) || 'Booking form',
  };

  if (!(inquiry.phone || inquiry.email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a phone number or email so we can reach you.',
    });
  }

  // Instant-quote pricing shown to the customer on the form (or the reason
  // no instant price was calculated).
  const pricing = normalizePricing(body.pricing);

  const id = crypto.randomUUID();
  const submittedAt = formatSubmittedAt(new Date());
  const dateTime = formatDateTime(inquiry.date, inquiry.time);

  // [label, value] in display order — one clearly labeled line per field.
  const fields = [
    ['Name', inquiry.name],
    ['Phone', inquiry.phone],
    ['Email', inquiry.email],
    ['Preferred Contact', inquiry.preferred_contact],
    ['Service Type', inquiry.service_type],
    // Only present for airport transfers — omit the row entirely otherwise.
    ...(inquiry.flight_number ? [['Flight Number', inquiry.flight_number]] : []),
    // With an instant price the vehicle is listed in the pricing rows below.
    ...(pricing.mode === 'instant' ? [] : [['Vehicle', inquiry.vehicle_type]]),
    ['Pickup Location', inquiry.pickup_location],
    ['Drop-off Location', inquiry.dropoff_location],
    ['Date & Time', dateTime],
    ['Passengers', inquiry.passengers],
    // Fare breakdown the customer saw on the form, or the custom-quote line.
    ...pricingRows(pricing),
    ['Notes', inquiry.message],
  ];

  const row = ([label, value]) =>
    `<tr>
       <td style="padding:10px 14px;background:#f7f7f7;font-weight:bold;color:#333;width:170px;border-bottom:1px solid #e5e5e5;vertical-align:top;white-space:nowrap;">${label}</td>
       <td style="padding:10px 14px;color:#111;border-bottom:1px solid #e5e5e5;${label === 'TOTAL' ? 'font-weight:bold;font-size:16px;' : ''}">${escapeHtml(value).replace(/\n/g, '<br>') || '<span style="color:#999;">&mdash;</span>'}</td>
     </tr>`;

  const html = `<!doctype html>
<html><body style="font-family:Arial,sans-serif;margin:0;padding:24px;background:#000;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;border:2px solid #c9a227;">
    <div style="background:#000;color:#c9a227;padding:18px 24px;">
      <h1 style="margin:0;font-size:22px;letter-spacing:0.04em;">IAD AIRPORT LIMO &mdash; NEW BOOKING INQUIRY</h1>
      <p style="margin:6px 0 0;color:#fff;font-size:13px;">Submitted ${escapeHtml(submittedAt)} &middot; via ${escapeHtml(inquiry.source)}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${fields.map(row).join('\n      ')}
    </table>
    <div style="background:#000;color:#fff;padding:14px 24px;text-align:center;font-size:12px;">
      Reply directly to this email to respond to the customer.<br>
      <span style="color:#777;">Inquiry ID: ${id}</span>
    </div>
  </div>
</body></html>`;

  const padWidth = Math.max(...fields.map(([label]) => label.length)) + 2;
  const pad = (label) => `${label}:`.padEnd(padWidth);
  const text = [
    'NEW BOOKING INQUIRY — IAD AIRPORT LIMO',
    `Submitted: ${submittedAt} (via ${inquiry.source})`,
    '',
    ...fields.map(([label, value]) => `${pad(label)}${value || '—'}`),
    '',
    `Inquiry ID: ${id}`,
  ].join('\n');

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPassword },
    });

    await transporter.sendMail({
      from: `IAD Airport Limo Website <${smtpUser}>`,
      to: recipient,
      replyTo: inquiry.email || smtpUser,
      subject: `${pricing.paid ? 'New Booking (PAID)' : 'New Booking Inquiry'} — ${inquiry.service_type} — ${inquiry.name} — ${pricingSubjectSuffix(pricing)}`,
      text,
      html,
    });

    return res.status(200).json({
      id,
      pricing,
      success: true,
      message: 'Inquiry received. Our team will contact you shortly.',
    });
  } catch (err) {
    console.error('Failed to send inquiry email:', err);
    return res.status(500).json({
      success: false,
      message: 'Unable to send your request right now. Please call (877) 609-1919.',
    });
  }
};
