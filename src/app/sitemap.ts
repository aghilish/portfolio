import type { MetadataRoute } from 'next';

const baseUrl = 'https://aghilish.github.io';

const routes = [
  '',
  '/about',
  '/services',
  '/portfolio',
  '/cv',
  '/speaking',
  '/content',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}

