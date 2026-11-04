// Scheduled publishing for blog posts.
//
// Opt-in: a post with `scheduled: true` whose `datePublished` (YYYY-MM-DD,
// America/New_York) is later than the build's publish cutoff is left out of
// the default export of src/data/blogData.js, so it has no /blog/<slug> route,
// no card on /blog, no related-post link, no breadcrumb, no sitemap entry and
// no prerendered HTML. Posts without the flag are always live.
// A daily Vercel cron (api/cron/rebuild.js) redeploys the site, which moves the
// cutoff forward and publishes posts on their date with no manual step.
//
// Import-free on purpose: scripts/generate-sitemap.js and scripts/prerender.js
// load it into plain Node.
//
// Cutoff source: the client bundle gets REACT_APP_PUBLISH_CUTOFF inlined at
// build time (set in craco.config.js), so the browser never uses its own clock.
// Node scripts fall back to today's Eastern date.

export const PUBLISH_TZ = "America/New_York";

export function easternDate(d = new Date()) {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PUBLISH_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

function readCutoff() {
  let fromEnv = "";
  try {
    // Written literally so CRA's DefinePlugin can inline it.
    fromEnv = process.env.REACT_APP_PUBLISH_CUTOFF || "";
  } catch (e) {
    fromEnv = "";
  }
  return /^\d{4}-\d{2}-\d{2}$/.test(fromEnv) ? fromEnv : easternDate();
}

export const PUBLISH_CUTOFF = readCutoff();

export function isPublished(post) {
  if (!post || post.scheduled !== true) return true;
  return typeof post.datePublished === "string" && post.datePublished <= PUBLISH_CUTOFF;
}
