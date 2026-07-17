---
name: create-darles-portfolio-card
description: Add or replace a Darles Games portfolio card in projects.js, write factual Russian and English copy, generate and prepare its WebP cover, validate the site changes, commit them, and push main to GitHub. Use when a user asks to add a game or product to the Darles Games portfolio, update an existing portfolio entry, create its RU/EN description, generate a cover, integrate the card and image into the site, or publish those portfolio changes.
---

# Create a Darles Portfolio Card

Execute the complete workflow. Work autonomously, ask at most three questions only when critical facts are missing, and never invent public facts.

## 1. Preflight

1. Confirm the working directory is the repository root with `git rev-parse --show-toplevel`.
2. Run `git status --short`, `git branch --show-current`, and `git remote -v`.
3. Require branch `main` and an `origin` for `DarlesGames/projects`. Preserve unrelated changes; stop if they overlap files needed for the card.
4. If the tree is clean, run `git pull --ff-only origin main`. Otherwise fetch `origin/main` and do not overwrite user changes.
5. Read [references/repository-schema.md](references/repository-schema.md), then inspect the live `projects.js`, `app.js`, and cover directory because the reference can become stale.
6. Search by normalized `id` and both localized titles. Select `ADD` only when absent; otherwise select `REPLACE`. Never create a duplicate.

## 2. Establish facts and write the card

- Extract explicit facts from the user's free-form description and supplied images. Ask only for information whose absence blocks a truthful card.
- Preserve the official product name. Write natural, mutually consistent RU/EN text describing the product, mechanics, user value, and implemented decisions without advertising exaggeration.
- Do not invent technology, platform, function, client, metric, result, award, or link.
- Use only values supported by the live schema. Default to `featured: false` and `links: []` when no verified links exist. Do not add a year field.
- Create a unique kebab-case `id`; for `REPLACE`, preserve the existing `id`.
- Supply every required localized field, 2–4 corresponding solution items per language, and 3–6 confirmed stack items. Include only verified `http` or `https` links.
- Set `cover` to `assets/projects/<project-id>.webp`.
- Use `scripts/update_project.py projects.js card.json --mode add|replace` for a surgical update from a temporary JSON object. Review its diff and delete the temporary input. Do not reformat the full data file.

## 3. Generate and prepare the cover

Use the built-in `$imagegen` skill. Inspect attached references and follow the product's visual style; if none exist, generate from the factual description.

Generate a 16:9 image with one clear focal point and strong small-card readability. Do not add text, captions, platform logos, HUD, frames, watermarks, unconfirmed mechanics or characters, the Darles Games logo, or default purple Darles styling for an unrelated product unless explicitly requested.

Save the generated source outside tracked repository paths, then run:

```text
python .agents/skills/create-darles-portfolio-card/scripts/prepare_cover.py <source> assets/projects/<project-id>.webp
```

The final asset must be exactly 1600×900 WebP. Do not stage intermediate PNG or temporary files.

## 4. Validate

Run all checks and fix failures before committing:

```text
node --check projects.js
node .agents/skills/create-darles-portfolio-card/scripts/validate_projects.mjs projects.js
git diff --check
```

Also run any repository tests, lint, or build commands that actually exist. The validator checks duplicate IDs, required fields, RU/EN structure, links, cover existence, and WebP dimensions. Manually compare RU/EN meaning, review `git diff`, and confirm only intended files changed. If any mandatory check fails, do not commit or push.

## 5. Commit and push

After successful checks, run `git status --short` again and stage only `projects.js`, `assets/projects/<project-id>.webp`, and files directly required for this card. Never stage unrelated user changes.

- ADD commit: `feat(portfolio): add <project-id>`
- REPLACE commit: `feat(portfolio): update <project-id>`

Commit, then run `git push origin main` without force. The explicit invocation of this skill authorizes commit and push; do not ask again. If rejected because `origin/main` advanced, fetch and safely rebase onto it, repeat validation, and retry without discarding others' work.

## 6. Report

Report ADD or REPLACE; project ID and title; changed files; cover path; checks; commit hash; pushed branch and remote; and the card URL only when it can be reliably derived. Distinguish a successful push from verified deployment and do not claim the site is published while deployment is running or unknown.
