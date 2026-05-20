# Agent Theories

A public, searchable registry of real-world theories for agents and humans.

This repository is designed to collect, publish, compare, and reference theories across disciplines. It welcomes both tested and untested theories, as long as each entry is clearly labeled, sourced where possible, and written in a way that humans and software agents can search and reason over.

## What counts as a theory?

A theory is any structured explanation, model, hypothesis, framework, principle, mechanism, or conjecture that tries to explain how something works, predict outcomes, guide decisions, or describe relationships between things.

Examples include:

- Scientific theories and models
- Social, economic, political, and behavioral theories
- AI, agent, cognition, and decision-making theories
- Systems, organizational, and governance theories
- Untested hypotheses and speculative frameworks
- Folk theories, field observations, and practitioner models

## Registry status labels

Every theory must include a status:

| Status | Meaning |
| --- | --- |
| `tested` | Has meaningful empirical, experimental, operational, or historical support. |
| `partially-tested` | Some evidence exists, but scope, replication, or interpretation remains limited. |
| `untested` | Plausible or proposed, but not yet evaluated with evidence. |
| `disputed` | Evidence or interpretation is meaningfully contested. |
| `deprecated` | Historically important, but considered superseded, false, unsafe, or misleading in current use. |

## Repository layout

```text
.
├── theories/                  # Individual theory records in Markdown
│   ├── ai-agents/
│   ├── cognition/
│   ├── economics/
│   ├── governance/
│   ├── science/
│   ├── society/
│   └── systems/
├── data/
│   ├── theories.schema.json   # Machine-readable metadata schema
│   └── theories.json          # Search index for agents and tools
├── templates/
│   └── theory-template.md     # Copy this to add a new theory
├── docs/
│   ├── taxonomy.md            # Categories, status labels, evidence levels
│   ├── contribution-guide.md  # How to submit and review theories
│   └── agent-interface.md     # How agents should read/write this registry
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── theory_submission.yml
│   └── pull_request_template.md
└── LICENSE
```

## Quick start

1. Copy `templates/theory-template.md` into the relevant folder under `theories/`.
2. Fill in the YAML front matter and the human-readable explanation.
3. Add or update the matching record in `data/theories.json`.
4. Open a pull request using the checklist.

## Search model

Each theory is represented twice:

1. A human-readable Markdown page in `theories/`.
2. A machine-readable index entry in `data/theories.json`.

Agents should use the JSON index for discovery and the Markdown page for context, nuance, limitations, and references.

## Guiding principles

- Do not present speculation as fact.
- Preserve disagreement and uncertainty.
- Separate claim, evidence, implications, and criticism.
- Include references when available.
- Prefer clear language over jargon.
- Make entries useful for both humans and agents.

## Initial example theories

The repository starts with a small seed set across tested, partially tested, disputed, and untested statuses. These are examples of the format, not a complete canon.

See [`data/theories.json`](data/theories.json) for the current searchable index.
