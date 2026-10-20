// Fire-and-forget outbound lead webhook, shared by api/lead-capture.js and
// the submit_booking_lead tool in api/chat.js. Self-contained — plain fetch,
// no shared lib/http.js in this repo.
//
// Required environment variable (set in Vercel project settings):
//   LEAD_WEBHOOK_URL — where lead JSON payloads are POSTed (e.g. a CRM or
//                      Zapier/Make inbound webhook). No-op if unset.

const WEBHOOK_TIMEOUT_MS = 6000;

/**
 * POSTs `payload` as JSON to LEAD_WEBHOOK_URL. Never throws — always
 * resolves with a result object, so callers can safely await it (e.g. via
 * Promise.allSettled) without risking the caller's own response. No-ops
 * (and logs) if LEAD_WEBHOOK_URL isn't configured.
 */
async function notifyLeadWebhook(payload) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    console.warn('notifyLeadWebhook: LEAD_WEBHOOK_URL not configured — skipping');
    return { skipped: true };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload ?? {}),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error(`notifyLeadWebhook: webhook responded ${res.status}`);
      return { success: false, status: res.status };
    }
    return { success: true };
  } catch (err) {
    console.error('notifyLeadWebhook failed:', err && err.message ? err.message : err);
    return { success: false, error: String((err && err.message) || err) };
  } finally {
    clearTimeout(timer);
  }
}

module.exports = { notifyLeadWebhook };
