import { getCollection } from 'astro:content';

export async function GET() {
  const theories = await getCollection('theories');

  const payload = theories.map((theory) => ({
    id: theory.data.id,
    slug: theory.slug,
    name: theory.data.name,
    status: theory.data.status,
    summary: theory.data.summary,
    category: theory.data.category,
    tags: theory.data.tags,
    applications: theory.data.applications,
    updated: theory.data.updated,
    url: `/Agent-Theories/theories/${theory.slug}`
  }));

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
