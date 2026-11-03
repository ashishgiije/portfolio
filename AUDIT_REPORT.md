# Source Audit — portfolio

Reviewed 4 November 2026 against source commit `7a13d5fc6b49df784fb3f3d4100bb110c2dcddef`. This is a focused code/documentation review and selected local validation, not a penetration test or an exhaustive vulnerability scan. Application files and credentials were not changed. Secret values are intentionally omitted.

## Severity summary

| Critical | High | Medium | Low |
|---:|---:|---:|---:|
| 0 | 0 | 1 | 3 |

Critical: direct resource/identity boundary failure. High: serious exposure or a core reproducibility blocker. Medium: correctness, validation, or deployment issue. Low: maintenance or coverage gap. Static findings describe potential impact; only explicitly listed runtime checks were executed.

## Findings

### 1. Medium — Project cards claim approximately 90% and 96% accuracy without linked evaluation evidence; the FoodieAI card describes a full-stack hybrid system while the inspected FoodieAI checkout is notebook-based

- **Affected file:** [src/data/content.ts](<src/data/content.ts>)
- **Evidence:** Project cards claim approximately 90% and 96% accuracy without linked evaluation evidence; the FoodieAI card describes a full-stack hybrid system while the inspected FoodieAI checkout is notebook-based.
- **Potential impact:** Portfolio claims can misrepresent the demonstrated work.
- **Recommended correction:** Replace unsupported metrics and stack claims with source-backed descriptions or provide reproducible evaluations.

### 2. Low — Some project links lead to the profile instead of a specific repository

- **Affected file:** [src/data/content.ts](<src/data/content.ts>)
- **Evidence:** Some project links lead to the profile instead of a specific repository.
- **Potential impact:** Visitors cannot directly inspect the showcased project.
- **Recommended correction:** Use the corresponding repository URL.

### 3. Low — Node is pinned only to major version 20 while Vite 8 needs a recent supported patch

- **Affected file:** [netlify.toml](<netlify.toml>)
- **Evidence:** Node is pinned only to major version 20 while Vite 8 needs a recent supported patch.
- **Potential impact:** A stale deployment image may fail its engine requirement.
- **Recommended correction:** Pin a compatible patch or supported newer major.

### 4. Low — No automated test script is defined

- **Affected file:** [package.json](<package.json>)
- **Evidence:** No automated test script is defined.
- **Potential impact:** Interaction and accessibility regressions lack coverage.
- **Recommended correction:** Add browser checks for filtering, navigation, and contact handoff.

## Validation evidence

`npm ci` and `npm run build` passed (TypeScript and Vite). No automated browser suite is defined. HTTP GET / returned 200 and expected page content

## Review scope and limits

Reviewed tracked application source, entry points, manifests/configuration, routes and data models where present, existing documentation, and available test definitions. Generated dependencies and binary artifacts were inventoried rather than treated as authored application logic. Provider calls, cloud deployment, and external data/model claims remain unverified unless explicitly listed above. No secret was rotated and no migration was run against a user database.

## Priorities

Address Critical and High findings before public deployment. Then add regression tests for the affected boundary or workflow, fix Medium issues, and resolve Low maintenance findings. All application corrections require a separate reviewed coding change.
