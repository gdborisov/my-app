# Copilot instructions — vention-ai-challenge-2.0-task-1

Note: original target was .github/copilot-instructions.md; created at repository root by request.

Purpose: short, actionable guidance for Copilot sessions operating on this repository.

---

## Build, test, and lint commands
- Project root (frontend): my-app/
- Start dev server: cd my-app && npm run dev  # runs `vite`
- Full build: cd my-app && npm run build  # runs `tsc -b && vite build` (note: uses project references)
- Lint: cd my-app && npm run lint  # runs `eslint .`
- Preview production build: cd my-app && npm run preview  # `vite preview`

Tests: No test runner or test scripts are configured in package.json. If tests are added, a single-test example (Vitest) would be: npx vitest -t "<test name>" or npm run test -- -t "<test name>".

---

## High-level architecture
- This repository currently contains a Vite + React + TypeScript frontend in `my-app/`.
  - Entry: `my-app/src/main.tsx` → `App.tsx` → `src/components/Leaderboard.tsx` (single-page leaderboard UI).
  - Styling: Tailwind CSS (v4) utilities are used across components; CSS entry at `my-app/src/index.css`.
  - Build: TypeScript project references configured via `my-app/tsconfig.json` referencing `tsconfig.app.json` and `tsconfig.node.json`. `npm run build` runs `tsc -b` before `vite build`.
- A `report.md` (project doc) notes the app was designed as part of a .NET + React + Tailwind stack; however the repository contains only the frontend app under `my-app/`.

---

## Key conventions and repo-specific patterns
- TypeScript project references: `my-app/tsconfig.json` references `tsconfig.app.json` and `tsconfig.node.json`. Treat the frontend as a composite TS project and keep `tsc -b` in CI when present.
- ESLint: `npm run lint` runs `eslint .`. README suggests using type-aware rules (referencing `tsconfig.app.json` and `tsconfig.node.json`) if enabling stricter linting — be careful to only enable type-checked ESLint rules after proper tsconfig paths are in place.
- Component layout: UI components live under `my-app/src/components/`. The main page is implemented as a small component tree; keep state/local hooks within components and memoization (`useMemo`) where heavy filtering/sorting is used.
- Assets: `my-app/src/assets/` holds static images used by the UI.
- No tests: There are no test files or test scripts. If adding tests, keep them adjacent to source files under `my-app/src/` and add a `test` script in `package.json`.

---

## Other AI/assistant config files checked
- Checked for common assistant config files (CLAUDE.md, .cursorrules, AGENTS.md, .windsurfrules, CONVENTIONS.md, .clinerules, etc.). None found to incorporate.

---

## Sources used to prepare this file
- my-app/package.json (scripts & deps)
- my-app/tsconfig*.json (project references)
- my-app/README.md (ESLint notes)
- report.md (implementation notes + .NET mention)
- key frontend files: my-app/src/main.tsx, my-app/src/App.tsx, my-app/src/components/Leaderboard.tsx

---

If you want this file moved to .github/ or added to CI, say so and I can create/move it.

---

## Playwright MCP server (Copilot setup steps)
Recommended Copilot setup steps workflow to prepare the Copilot cloud agent for running Playwright tests and browser installation. Create the file at: .github/workflows/copilot-setup-steps.yml (the job MUST be named `copilot-setup-steps`). Merge to the default branch so Copilot will use it.

YAML (place as .github/workflows/copilot-setup-steps.yml):

```yaml
name: "Copilot Setup Steps"

on:
  workflow_dispatch:
  push:
    paths:
      - .github/workflows/copilot-setup-steps.yml
  pull_request:
    paths:
      - .github/workflows/copilot-setup-steps.yml

jobs:
  copilot-setup-steps:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    timeout-minutes: 30
    steps:
      - name: Checkout code
        uses: actions/checkout@v5

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install JavaScript dependencies
        run: npm ci
        working-directory: my-app

      - name: Install Playwright browsers and dependencies
        run: npx playwright install --with-deps
        working-directory: my-app

      - name: Optional: build to validate setup
        run: npm run build --if-present
        working-directory: my-app
```

Notes:
- The workflow pre-installs Node 20, runs npm ci in `my-app/`, and installs Playwright browsers so the agent can run UI tests that require browsers.
- If Playwright is not yet a devDependency, consider adding `@playwright/test` to `my-app/package.json` and committing; otherwise the workflow will still run `npx playwright` when invoked.
- The workflow must be on the default branch for Copilot to pick it up.

Local commands (suggested) to run Playwright locally:
- Install: cd my-app && npm i -D @playwright/test
- Install browsers: cd my-app && npx playwright install
- Run tests: cd my-app && npx playwright test -g "<test name>"
- Open recorder: cd my-app && npx playwright codegen http://localhost:5173

If you'd like, create the workflow file here (requires creating .github/workflows/). If you prefer, copy the YAML above into that path and I will validate or extend it for CI/runner customization.
