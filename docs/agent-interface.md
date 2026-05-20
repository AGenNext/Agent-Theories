# Agent Interface Specification

This registry is intentionally designed for both humans and software agents.

## Recommended ingestion flow

1. Read `data/theories.json`.
2. Filter by:
   - status
   - category
   - tags
   - applications
3. Open the linked Markdown file in `theories/` for deeper context.
4. Extract:
   - claims
   - assumptions
   - evidence
   - criticisms
   - implications

## Recommended agent behaviors

Agents interacting with this repository should:

- Preserve uncertainty.
- Distinguish evidence from speculation.
- Avoid collapsing multiple theories into one.
- Cite theory IDs when referencing concepts.
- Track contradictory theories explicitly.

## Future directions

Potential additions:

- Graph relationships between theories
- Embedding-based semantic search
- Theory lineage and evolution tracking
- Confidence scoring
- Community review and voting
- Structured benchmarks for predictive accuracy
