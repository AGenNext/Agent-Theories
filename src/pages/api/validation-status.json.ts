import { getCollection } from 'astro:content';

export async function GET() {
  const theories = await getCollection('theories');

  const payload = theories.map((theory) => ({
    id: theory.data.id,
    name: theory.data.name,
    status: theory.data.status,
    review_status: theory.data.review_status,
    confidence_score: theory.data.confidence_score,
    validation_status: theory.data.validation_status,
    testability: theory.data.testability || null,
    falsifiable_predictions: theory.data.falsifiable_predictions || [],
    testing_methods: theory.data.testing_methods || [],
    failed_tests: theory.data.failed_tests || [],
    boundary_conditions: theory.data.boundary_conditions || [],
    safety_considerations: theory.data.safety_considerations || [],
    application_domains: theory.data.application_domains || theory.data.applications || [],
    observed_outcomes: theory.data.observed_outcomes || [],
    misuse_cases: theory.data.misuse_cases || [],
    url: `/Agent-Theories/theories/${theory.slug}`
  }));

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
