# Agent API

Agent Theories exposes multiple machine-readable endpoints for retrieval, reasoning, semantic indexing, and agent workflows.

## Available APIs

| Endpoint | Purpose |
| --- | --- |
| `/api/theories.json` | Basic theory registry |
| `/api/search-index.json` | Search-oriented metadata index |
| `/api/graph.json` | Theory relationship graph |
| `/api/citations.json` | Theory citations and references |
| `/api/jsonld.json` | Semantic-web and JSON-LD export |
| `/rss.xml` | Update feed |

## Intended uses

- Retrieval-Augmented Generation (RAG)
- Semantic search
- Knowledge graph ingestion
- Ontology building
- Multi-agent planning
- Theory comparison
- Citation analysis
- Research assistants
- Scientific indexing

## Data principles

The registry is designed to:

- preserve uncertainty,
- distinguish speculation from evidence,
- represent conflicting theories,
- expose provenance and citations,
- support both humans and software agents.

## Recommended ingestion flow

1. Fetch `/api/search-index.json`
2. Retrieve target theory pages
3. Fetch `/api/graph.json` for relationships
4. Use `/api/citations.json` for provenance
5. Use `/api/jsonld.json` for semantic export
