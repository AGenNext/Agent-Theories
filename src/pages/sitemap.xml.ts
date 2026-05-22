import { getCollection } from 'astro:content';

export async function GET() {
  const theories = await getCollection('theories');

  const urls = [
    '',
    '/search',
    '/compare',
    '/graph',
    '/graph-interactive'
  ];

  const theoryUrls = theories.map(
    (theory) => `/theories/${theory.slug}`
  );

  const all = [...urls, ...theoryUrls]
    .map((path) => `
      <url>
        <loc>https://agennext.github.io/Agent-Theories${path}</loc>
      </url>
    `)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${all}
  </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
