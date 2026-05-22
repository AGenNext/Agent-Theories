import { getCollection } from 'astro:content';

export async function GET() {
  const theories = await getCollection('theories');

  const nodes = theories.map((theory) => ({
    id: theory.data.id,
    slug: theory.slug,
    name: theory.data.name,
    status: theory.data.status,
    summary: theory.data.summary,
    category: theory.data.category,
    tags: theory.data.tags,
    url: `/Agent-Theories/theories/${theory.slug}`
  }));

  const edges = theories.flatMap((theory) =>
    (theory.data.related_theories || []).map((target) => ({
      source: theory.data.id,
      target,
      relationship: 'related'
    }))
  );

  return new Response(JSON.stringify({ nodes, edges }, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
