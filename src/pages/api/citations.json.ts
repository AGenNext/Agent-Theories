import { getCollection } from 'astro:content';

export async function GET() {
  const theories = await getCollection('theories');

  const citations = theories.map((theory) => ({
    theory_id: theory.data.id,
    theory_name: theory.data.name,
    references: theory.data.references || []
  }));

  return new Response(JSON.stringify(citations, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
