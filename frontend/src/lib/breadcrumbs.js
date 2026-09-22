// Breadcrumb trail for any pathname, from the site's data files. Used by
// <SiteBreadcrumbs> for the visible trail and the BreadcrumbList JSON-LD.
import routesData from '../data/routesData';
import venuesData from '../data/venuesData';
import { MARYLAND_PAGES } from '../data/marylandPages';
import blogPosts from '../data/blogData';
import { GUIDES } from '../data/guides';

const STATIC = {
  '/about': 'About', '/contact': 'Contact', '/booking': 'Book Now', '/book-now': 'Book Now', '/reviews': 'Reviews',
  '/privacy': 'Privacy Policy', '/terms': 'Terms', '/fleet': 'Fleet', '/blog': 'Blog', '/service-areas': 'Service Areas',
  '/airport-transfer': 'Airport Transfers', '/wine-tours': 'Wine Tours', '/wedding-limo': 'Wedding Limo',
  '/birthday-limo': 'Birthday Limo', '/prom-limo': 'Prom Limo', '/corporate': 'Corporate Travel',
  '/concert-transportation': 'Concert Transportation',
};
const HOME = { label: 'Home', to: '/' };
const AREAS = { label: 'Service Areas', to: '/service-areas' };
const BLOG = { label: 'Blog', to: '/blog' };
const FLEET = { label: 'Fleet', to: '/fleet' };
const title = (s) => s.split('-').map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w)).join(' ');

// Maryland-shape pages already emit BreadcrumbList in their own JSON-LD.
export const hasOwnBreadcrumbSchema = (slug) => MARYLAND_PAGES.some((p) => p.slug === slug);

export const breadcrumbTrail = (pathname) => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  if (path === '/' || path === '' || path === '/login') return null;
  const slug = path.slice(1);
  const here = (label) => ({ label, to: path });
  if (STATIC[path]) return [HOME, here(STATIC[path])];
  if (path.startsWith('/vehicles/')) return [HOME, FLEET, here(title(slug.slice(9)))];
  if (path.startsWith('/services/')) return [HOME, here(`${title(slug.slice(9))} Services`)];
  if (path.startsWith('/why-choose/')) return [HOME, here(`Why Choose Us: ${title(slug.slice(11))}`)];
  if (path.startsWith('/blog/')) {
    const post = blogPosts.find((p) => p.slug === slug.slice(5));
    return post ? [HOME, BLOG, here(post.title)] : null;
  }
  const guide = GUIDES.find((g) => g.slug === slug);
  if (guide) return [HOME, BLOG, here(guide.title)];
  const page = routesData.find((p) => p.slug === slug) || venuesData.find((p) => p.slug === slug) || MARYLAND_PAGES.find((p) => p.slug === slug);
  return page ? [HOME, AREAS, here(page.h1)] : null;
};
