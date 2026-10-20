// Vercel serverless function: captures quick lead-gen submissions (the
// 30-second lead popup and the exit-intent popup) and relays them via SMS +
// an optional outbound webhook. Self-contained, matching api/quote-requests.js
// — no shared lib/http.js; only the new lib/sms.js + lib/leadWebhook.js,
// which are also reused by the submit_booking_lead tool in api/chat.js.

const { sendSms } = require('../lib/sms.js');
const { notifyLeadWebhook } = require('../lib/leadWebhook.js');

const field = (v, max) => String(v ?? '').trim().slice(0, max);
const phoneDigits = (v) => String(v ?? '').replace(/\D/g, '');
const isValidPhone = (v) => {
  const digits = phoneDigits(v);
  return digits.length >= 10 && digits.length <= 15;
};
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v ?? '').trim());

const VALID_SOURCES = new Set(['lead_popup', 'exit_intent', 'chat_widget']);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const body = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const name = field(body.name, 120);
  const phone = field(body.phone, 40);
  const email = field(body.email, 200);
  const source = VALID_SOURCES.has(body.source) ? body.source : 'lead_popup';

  if (!name) {
    return res.status(400).json({ success: false, message: 'Please enter your name.' });
  }
  if (!isValidPhone(phone)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid phone number.' });
  }
  if (email && !isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  const smsBody = [
    'New lead — IAD Airport Limo website',
    `Source: ${source}`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const webhookPayload = {
    source,
    name,
    phone,
    email: email || undefined,
    submitted_at: new Date().toISOString(),
  };

  // Never let an SMS/webhook failure (or a slow one — each is internally
  // time-bounded) stop the visitor from getting a success response.
  await Promise.allSettled([sendSms(smsBody), notifyLeadWebhook(webhookPayload)]);

  return res.status(201).json({
    success: true,
    message: "Thanks! We'll text or call you shortly.",
  });
};
