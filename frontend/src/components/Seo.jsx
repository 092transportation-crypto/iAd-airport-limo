import { useEffect } from 'react';

const SITE_URL = 'https://www.iadairportlimo.com';
const SITE_NAME = 'IAD Airport Limo';

const setMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const SCHEMA_ID = 'seo-page-schema';

/**
 * Per-page head manager for this SPA: sets title, meta description,
 * canonical, Open Graph tags, and optional FAQPage / Article JSON-LD.
 *
 * Props:
 * - title: string (keep under 60 chars)
 * - description: string (keep under 160 chars)
 * - path: string route path, e.g. "/iad-to-bethesda"
 * - faqs: optional [{ question, answer }] rendered as FAQPage schema
 * - article: optional { headline, datePublished, dateModified }
 */
const Seo = ({ title, description, path = '/', faqs, article }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;

    document.title = title;
    setMeta('name', 'description', description);
    setCanonical(url);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', article ? 'article' : 'website');
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    document.querySelectorAll(`script[data-seo="${SCHEMA_ID}"]`).forEach((s) => s.remove());

    const schemas = [];
    if (faqs && faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      });
    }
    if (article) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.headline || title,
        description,
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        mainEntityOfPage: url,
        ...(article.datePublished ? { datePublished: article.datePublished } : {}),
        ...(article.dateModified ? { dateModified: article.dateModified } : {}),
      });
    }
    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seo = SCHEMA_ID;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    window.scrollTo(0, 0);

    return () => {
      document.querySelectorAll(`script[data-seo="${SCHEMA_ID}"]`).forEach((s) => s.remove());
    };
  }, [title, description, path, faqs, article]);

  return null;
};

export default Seo;
