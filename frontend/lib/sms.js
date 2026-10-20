// Fire-and-forget Twilio SMS helper, shared by api/lead-capture.js and the
// submit_booking_lead tool in api/chat.js. Self-contained (no shared
// lib/http.js in this repo) — plain fetch + Twilio's REST API directly.
//
// Required environment variables (set in Vercel project settings):
//   TWILIO_ACCOUNT_SID
//   TWILIO_AUTH_TOKEN
//   TWILIO_FROM_NUMBER  — Twilio phone number the alert is sent from
//   ALERT_PHONE_NUMBER  — phone number the lead alert is sent to

const TWILIO_TIMEOUT_MS = 6000;

/**
 * Sends `body` as an SMS alert. Never throws — always resolves with a
 * result object describing what happened, so callers can safely await it
 * (e.g. via Promise.allSettled) without risking the caller's own response.
 * No-ops (and logs) if any required env var is missing.
 */
async function sendSms(body) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM_NUMBER;
  const to = process.env.ALERT_PHONE_NUMBER;

  if (!accountSid || !authToken || !from || !to) {
    console.warn('sendSms: Twilio env vars not fully configured — skipping SMS alert');
    return { skipped: true };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TWILIO_TIMEOUT_MS);

  try {
    const auth = Buffer.from(`${accountSid}:${authToken}`).toString('base64');
    const params = new URLSearchParams({
      To: to,
      From: from,
      Body: String(body ?? '').slice(0, 1500),
    });

    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
        signal: controller.signal,
      }
    );

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`sendSms: Twilio responded ${res.status}: ${text.slice(0, 300)}`);
      return { success: false, status: res.status };
    }
    return { success: true };
  } catch (err) {
    console.error('sendSms failed:', err && err.message ? err.message : err);
    return { success: false, error: String((err && err.message) || err) };
  } finally {
    clearTimeout(timer);
  }
}

module.exports = { sendSms };
