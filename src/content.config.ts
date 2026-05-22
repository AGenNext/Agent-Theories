import { defineCollection, z } from 'astro:content';

const theories = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    status: z.enum(['tested', 'partially-tested', 'untested', 'disputed', 'deprecated']),
    category: z.array(z.string()),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    claims: z.array(z.string()).default([]),
    assumptions: z.array(z.string()).default([]),
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
    license_note: z.string().optional()
  })
});

export const collections = { theories };
