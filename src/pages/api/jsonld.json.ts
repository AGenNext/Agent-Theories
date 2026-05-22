import { getCollection } from 'astro:content';

export async function GET() {
  const theories = await getCollection('theories');

  const graph = theories.map((theory) => ({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    identifier: theory.data.id,
    name: theory.data.name,
    description: theory.data.summary,
    keywords: theory.data.tags,
    dateCreated: theory.data.created,
    dateModified: theory.data.updated,
    url: `/Agent-Theories/theories/${theory.slug}`,
    about: theory.data.category,
    citation: (theory.data.references || []).map((reference) => ({
      '@type': 'CreativeWork',
      name: reference.title,
      url: reference.url
    }))
  }));

  return new Response(JSON.stringify(graph, null, 2), {
    headers: {
      'Content-Type': 'application/ld+json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
