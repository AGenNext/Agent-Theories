import { defineCollection, z } from 'astro:content';

const theories = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    status: z.enum(['tested', 'partially-tested', 'untested', 'disputed', 'deprecated']),
    review_status: z.enum(['draft', 'submitted', 'reviewed', 'expert-reviewed', 'needs-revision']).default('draft'),
    confidence_score: z.number().min(0).max(1).default(0),
    category: z.array(z.string()),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    claims: z.array(z.string()).default([]),
    assumptions: z.array(z.string()).default([]),
    testability: z.string().optional(),
    falsifiable_predictions: z.array(z.string()).default([]),
    testing_methods: z.array(z.enum([
      'experiment',
      'simulation',
      'benchmark',
      'field-study',
      'case-study',
      'historical-analysis',
      'formal-proof',
      'expert-review',
      'replication'
    ])).default([]),
    validation_status: z.enum([
      'unvalidated',
      'early-validation',
      'partially-validated',
      'validated',
      'extensively-validated'
    ]).default('unvalidated'),
    failed_tests: z.array(z.string()).default([]),
    boundary_conditions: z.array(z.string()).default([]),
    safety_considerations: z.array(z.string()).default([]),
    evidence_level: z.enum(['low', 'medium', 'high']).optional(),
    references: z.array(
      z.object({
        title: z.string(),
        source_type: z.string().optional(),
        url: z.string().url()
      })
    ).default([]),
    related_theories: z.array(z.string()).default([]),
    criticisms: z.array(z.string()).default([]),
    applications: z.array(z.string()).default([]),
    application_domains: z.array(z.string()).default([]),
    observed_outcomes: z.array(z.string()).default([]),
    misuse_cases: z.array(z.string()).default([]),
    license_note: z.string().optional()
  })
});

export const collections = { theories };
