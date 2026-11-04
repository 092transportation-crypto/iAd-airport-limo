/* eslint-disable */
/**
 * Sitemap generator.
 *
 * public/sitemap-static.xml was previously hand-maintained, which is how
 * SEO-pass additions (new landing pages, new routes) silently fell out of
 * sync with the sitemap. This script imports the real data modules (via the
 * same babel require-hook trick scripts/prerender.js uses to load ESM .js
 * files into plain Node) and regenerates the file from source, so every
 * MARYLAND_PAGES / routesData / venuesData / guides / blogData entry — and
 * every static route declared below — is always listed.
 *
 * Run: node scripts/generate-sitemap.js
 */
const fs = require("fs");
const path = require("path");
const Module = require("module");

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const ORIGIN = "https://www.iadairportlimo.com";
const TODAY = new Date().toISOString().slice(0, 10);

function installCompiler() {
  const babel = require("@babel/core");
  const opts = {
    babelrc: false,
    configFile: false,
    presets: [[require.resolve("@babel/preset-react"), { runtime: "automatic" }]],
    plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")],
  };
  const compile = (module, filename) =>
    module._compile(babel.transformSync(fs.readFileSync(filename, "utf8"), { ...opts, filename }).code, filename);
  const origJs = Module._extensions[".js"];
  Module._extensions[".jsx"] = compile;
  Module._extensions[".js"] = (module, filename) =>
    filename.startsWith(SRC + path.sep) ? compile(module, filename) : origJs(module, filename);
  for (const ext of [".css", ".scss"]) Module._extensions[ext] = () => {};
  for (const ext of [".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif"])
    Module._extensions[ext] = (module, filename) => { module.exports = "/" + path.basename(filename); };
}
installCompiler();

const { MARYLAND_PAGES } = require(path.join(SRC, "data", "marylandPages.js"));
const routesData = require(path.join(SRC, "data", "routesData.js")).default;
const venuesData = require(path.join(SRC, "data", "venuesData.js")).default;
const { GUIDES } = require(path.join(SRC, "data", "guides.js"));
// Default export = live posts only (scheduled future posts filtered out).
const blogPosts = require(path.join(SRC, "data", "blogData.js")).default;

const OUT_PATH = path.join(ROOT, "public", "sitemap-static.xml");

// <loc> -> <lastmod> from the sitemap currently on disk (empty if missing).
// URLs already listed keep their lastmod, so the daily scheduled-publishing
// rebuild (prebuild runs this script) doesn't stamp every page with today's
// date. Only URLs new to the sitemap get today.
function previousLastmods() {
  const map = new Map();
  let xml = "";
  try {
    xml = fs.readFileSync(OUT_PATH, "utf8");
  } catch (e) {
    return map;
  }
  const re = /<loc>([^<]+)<\/loc>\s*<lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod>/g;
  let m;
  while ((m = re.exec(xml))) map.set(m[1], m[2]);
  return map;
}
const PREVIOUS = previousLastmods();

const urls = [];
const add = (loc, { priority = "0.6", changefreq = "monthly", lastmod } = {}) => {
  const full = `${ORIGIN}${loc}`;
  urls.push({ loc: full, priority, changefreq, lastmod: lastmod || PREVIOUS.get(full) || TODAY });
};

// --- Static top-level pages ---
add("/", { priority: "1.0", changefreq: "weekly" });
add("/book-now", { priority: "0.9" });
add("/fleet", { priority: "0.9" });
add("/airport-transfer", { priority: "0.9" });
add("/service-areas", { priority: "0.8" });
add("/corporate", { priority: "0.8" });
// Vehicle & service category routes (/vehicles/:category, /services/:type) are
// client-side-param routes with their own real content per category/type —
// list every known value explicitly so prerender renders and sitemaps them.
add("/vehicles/sedans", { priority: "0.8" });
add("/vehicles/suv", { priority: "0.8" });
add("/vehicles/sprinters", { priority: "0.8" });
add("/vehicles/buses", { priority: "0.8" });
add("/services/personal", { priority: "0.8" });
add("/services/corporate", { priority: "0.8" });
add("/services/events", { priority: "0.8" });
add("/wedding-limo", { priority: "0.7" });
add("/wine-tours", { priority: "0.7" });
add("/birthday-limo", { priority: "0.6" });
add("/prom-limo", { priority: "0.6" });
add("/concert-transportation", { priority: "0.8" });
add("/contact", { priority: "0.8" });
add("/about", { priority: "0.7" });
add("/reviews", { priority: "0.6" });
add("/privacy", { priority: "0.3" });
add("/terms", { priority: "0.3" });
// Note: /login is intentionally excluded (Disallow: /login in robots.txt).

// --- IAD route landing pages (routesData.js) ---
for (const r of routesData) add(`/${r.slug}`, { priority: "0.8" });

// --- Maryland/Virginia city, route, service & event pages (marylandPages.js incl. all batches) ---
for (const p of MARYLAND_PAGES) add(`/${p.slug}`, { priority: p.type === "city" ? "0.8" : "0.7" });

// --- Concert & event venue pages (venuesData.js) ---
for (const v of venuesData) add(`/${v.slug}`, { priority: "0.7" });

// --- Guides (root-level articles) ---
for (const g of GUIDES) add(`/${g.slug}`, { priority: "0.7" });

// --- Blog ---
add("/blog", { priority: "0.7", changefreq: "weekly" });
for (const post of blogPosts) add(`/blog/${post.slug}`, { priority: "0.6" });

// De-duplicate by loc, preserving first occurrence.
const seen = new Set();
const deduped = urls.filter((u) => (seen.has(u.loc) ? false : (seen.add(u.loc), true)));

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  deduped
    .map(
      (u) =>
        `<url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`
    )
    .join("\n") +
  `\n</urlset>\n`;

const outPath = OUT_PATH;
fs.writeFileSync(outPath, xml, "utf8");
console.log(`[sitemap] wrote ${deduped.length} URLs (${urls.length - deduped.length} duplicates removed) to ${path.relative(ROOT, outPath)}`);
