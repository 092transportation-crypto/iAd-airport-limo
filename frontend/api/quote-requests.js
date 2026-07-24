// Vercel serverless function: receives booking/contact form submissions and
// emails them to the team via Gmail SMTP.
//
// Required environment variables (set in Vercel project settings):
//   SMTP_USER          — Gmail address used to send
//   SMTP_PASSWORD      — 16-character Gmail app password
//   NOTIFICATION_EMAIL — where booking notifications are delivered (defaults to SMTP_USER)

const nodemailer = require('nodemailer');
const crypto = require('crypto');

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
    ['Pickup Location', inquiry.pickup_location],
    ['Drop-off Location', inquiry.dropoff_location],
    ['Date & Time', dateTime],
    ['Passengers', inquiry.passengers],
    ['Notes', inquiry.message],
  ];

  const row = ([label, value]) =>
    `<tr>
       <td style="padding:10px 14px;background:#f7f7f7;font-weight:bold;color:#333;width:170px;border-bottom:1px solid #e5e5e5;vertical-align:top;white-space:nowrap;">${label}</td>
       <td style="padding:10px 14px;color:#111;border-bottom:1px solid #e5e5e5;">${escapeHtml(value).replace(/\n/g, '<br>') || '<span style="color:#999;">&mdash;</span>'}</td>
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

  const pad = (label) => `${label}:`.padEnd(19);
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
      subject: `New Booking Inquiry — ${inquiry.service_type} — ${inquiry.name}`,
      text,
      html,
    });

    return res.status(200).json({
      id,
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
