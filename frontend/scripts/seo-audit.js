/* eslint-disable */
// SEO error audit over the prerendered build output. Reports concrete
// findings across 10 categories; does not fix anything itself.
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BUILD_DIR = path.join(ROOT, "build");
const ORIGIN = "https://www.iadairportlimo.com";

function walkHtml(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "static") continue;
      walkHtml(full, out);
    } else if (entry.name === "index.html") {
      out.push(full);
    }
  }
  return out;
}

function routeFor(file) {
  const rel = path.relative(BUILD_DIR, path.dirname(file));
  return rel === "" ? "/" : "/" + rel.replace(/\\/g, "/");
}

const files = walkHtml(BUILD_DIR).filter(
  (f) => path.basename(path.dirname(f)) !== "shell.html" && !f.endsWith(path.join("build", "index.html")) || path.dirname(f) === BUILD_DIR
);
// Exclude the raw shell.html fallback itself (not a routed page)
const pages = files.filter((f) => !f.includes("shell.html"));

const titleMap = new Map(); // title -> [routes]
const descMap = new Map();
const contentMap = new Map(); // normalized body text -> [routes]
const missingTitle = [];
const missingCanonical = [];
const wrongCanonical = [];
const missingH1 = [];
const multiH1 = [];
const invalidSchema = [];
const allInternalLinks = new Map(); // route -> [hrefs]
const allInternalImages = new Map(); // route -> [srcs]

for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  const route = routeFor(file);

  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";
  if (!title) missingTitle.push(route);
  else {
    if (!titleMap.has(title)) titleMap.set(title, []);
    titleMap.get(title).push(route);
  }

  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const desc = descMatch ? descMatch[1].trim() : "";
  if (desc) {
    if (!descMap.has(desc)) descMap.set(desc, []);
    descMap.get(desc).push(route);
  }

  const canonMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  const canon = canonMatch ? canonMatch[1].trim() : "";
  if (!canon) missingCanonical.push(route);
  else {
    const expected = ORIGIN + (route === "/" ? "" : route);
    const expectedAlt = ORIGIN + (route === "/" ? "/" : route);
    if (canon !== expected && canon !== expectedAlt) {
      wrongCanonical.push({ route, canon, expected });
    }
  }

  const h1Matches = html.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length === 0) missingH1.push(route);
  if (h1Matches.length > 1) multiH1.push({ route, count: h1Matches.length });

  // normalized body content fingerprint (strip tags/whitespace, drop head)
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : html;
  const normalized = body
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (normalized.length > 200) {
    if (!contentMap.has(normalized)) contentMap.set(normalized, []);
    contentMap.get(normalized).push(route);
  }

  // JSON-LD
  const ldMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const m of ldMatches) {
    const raw = m[1].trim();
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      invalidSchema.push({ route, error: "invalid JSON: " + e.message, snippet: raw.slice(0, 120) });
      continue;
    }
    const items = Array.isArray(parsed) ? parsed : parsed["@graph"] ? parsed["@graph"] : [parsed];
    for (const item of items) {
      const type = item["@type"];
      if (!type) {
        invalidSchema.push({ route, error: "missing @type", snippet: JSON.stringify(item).slice(0, 120) });
        continue;
      }
      if (type === "FAQPage") {
        const entities = item.mainEntity || [];
        if (!Array.isArray(entities) || entities.length < 1) {
          invalidSchema.push({ route, error: "FAQPage has no mainEntity Q&A pairs" });
        } else {
          for (const q of entities) {
            if (!q.name || !q.acceptedAnswer || !q.acceptedAnswer.text) {
              invalidSchema.push({ route, error: "FAQPage question missing name/acceptedAnswer.text" });
              break;
            }
          }
        }
      }
      if (type === "BlogPosting" || type === "Article") {
        if (!item.headline) invalidSchema.push({ route, error: `${type} missing headline` });
        if (!item.datePublished) invalidSchema.push({ route, error: `${type} missing datePublished` });
      }
      if (type === "BreadcrumbList") {
        const le = item.itemListElement || [];
        if (!Array.isArray(le) || le.length < 1) {
          invalidSchema.push({ route, error: "BreadcrumbList has no itemListElement" });
        }
      }
      if (type === "LocalBusiness" || (Array.isArray(item["@type"]) && item["@type"].includes("LocalBusiness"))) {
        if (!item.name) invalidSchema.push({ route, error: "LocalBusiness missing name" });
      }
    }
  }

  // internal links
  const hrefs = [...html.matchAll(/<a\s[^>]*href=["']([^"']+)["']/gi)].map((m) => m[1]);
  const internalHrefs = hrefs.filter(
    (h) => h.startsWith("/") && !h.startsWith("//") && !h.startsWith("/api/")
  );
  allInternalLinks.set(route, internalHrefs);

  // internal images
  const srcs = [...html.matchAll(/<img\s[^>]*src=["']([^"']+)["']/gi)].map((m) => m[1]);
  const internalSrcs = srcs.filter((s) => s.startsWith("/") && !s.startsWith("//"));
  allInternalImages.set(route, internalSrcs);
}

// Build set of valid routes (directories with index.html) for link-checking
const validRoutes = new Set(pages.map(routeFor));
// also treat root-level static files (robots.txt etc.) and /index.html as valid for "/"
function normalizeHref(href) {
  let h = href.split("#")[0].split("?")[0];
  if (h.length > 1 && h.endsWith("/")) h = h.slice(0, -1);
  if (h === "") h = "/";
  return h;
}

const brokenLinks = [];
for (const [route, hrefs] of allInternalLinks) {
  for (const href of hrefs) {
    const norm = normalizeHref(href);
    if (!validRoutes.has(norm)) {
      brokenLinks.push({ route, href });
    }
  }
}

const brokenImages = [];
for (const [route, srcs] of allInternalImages) {
  for (const src of srcs) {
    const clean = src.split("?")[0];
    const filePath = path.join(BUILD_DIR, clean.replace(/^\//, ""));
    if (!fs.existsSync(filePath)) {
      brokenImages.push({ route, src });
    }
  }
}

// sitemap hygiene
const sitemapPath = path.join(BUILD_DIR, "sitemap-static.xml");
const sitemapXml = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, "utf8") : "";
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
const badSitemapEntries = [];
for (const url of sitemapUrls) {
  if (!url.startsWith(ORIGIN)) {
    badSitemapEntries.push({ url, reason: "wrong origin" });
    continue;
  }
  const routePath = url.slice(ORIGIN.length) || "/";
  const norm = normalizeHref(routePath);
  if (!validRoutes.has(norm)) {
    badSitemapEntries.push({ url, reason: "no matching prerendered page (404 or unbuilt)" });
  }
}

const dupTitles = [...titleMap.entries()].filter(([, routes]) => routes.length > 1);
const dupDescs = [...descMap.entries()].filter(([, routes]) => routes.length > 1);
const dupContent = [...contentMap.entries()].filter(([, routes]) => routes.length > 1);

const report = {
  totalPages: pages.length,
  duplicateTitles: dupTitles.map(([t, r]) => ({ title: t, routes: r })),
  duplicateDescriptions: dupDescs.map(([d, r]) => ({ desc: d.slice(0, 80), routes: r })),
  duplicateContent: dupContent.map(([, r]) => ({ routes: r })),
  missingTitle,
  missingCanonical,
  wrongCanonical,
  missingH1,
  multiH1,
  invalidSchema,
  brokenLinks,
  brokenImages,
  badSitemapEntries,
};

fs.writeFileSync(path.join(ROOT, "seo-audit-report.json"), JSON.stringify(report, null, 2));

console.log("=== SEO AUDIT SUMMARY ===");
console.log("Total pages:", report.totalPages);
console.log("Duplicate title groups:", dupTitles.length, "(pages affected:", dupTitles.reduce((a, [, r]) => a + r.length, 0), ")");
console.log("Duplicate description groups:", dupDescs.length, "(pages affected:", dupDescs.reduce((a, [, r]) => a + r.length, 0), ")");
console.log("Duplicate content groups:", dupContent.length, "(pages affected:", dupContent.reduce((a, [, r]) => a + r.length, 0), ")");
console.log("Missing title:", missingTitle.length);
console.log("Missing canonical:", missingCanonical.length);
console.log("Wrong canonical:", wrongCanonical.length);
console.log("Missing H1:", missingH1.length);
console.log("Multiple H1:", multiH1.length);
console.log("Invalid schema issues:", invalidSchema.length);
console.log("Broken internal links:", brokenLinks.length);
console.log("Broken internal images:", brokenImages.length);
console.log("Bad sitemap entries:", badSitemapEntries.length);
console.log("Full report: seo-audit-report.json");
