import theories from '../../../data/theories.json';

export async function GET() {
  return new Response(JSON.stringify(theories, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
