import { getCollection } from 'astro:content';

export async function GET() {
  const theories = await getCollection('theories');

  const payload = theories.map((theory) => ({
    id: theory.data.id,
    name: theory.data.name,
    status: theory.data.status,
    validation_status: theory.data.validation_status,
    confidence_score: theory.data.confidence_score,
    testability: theory.data.testability,
    falsifiable_predictions: theory.data.falsifiable_predictions,
    testing_methods: theory.data.testing_methods,
    application_domains: theory.data.application_domains,
    observed_outcomes: theory.data.observed_outcomes,
    failed_tests: theory.data.failed_tests,
    misuse_cases: theory.data.misuse_cases,
    safety_considerations: theory.data.safety_considerations,
    url: `/Agent-Theories/theories/${theory.slug}`
  }));

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
