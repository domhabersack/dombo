# dombo

Dom Habersack's personal design system. One set of rules, tokens and components covers websites, SaaS demos, Slidev presentations, email newsletters and social posts. It's built on Tailwind CSS and follows Refactoring UI.

**Live:** https://domhabersack.github.io/dombo/ (one page with every rule, top to bottom)

## How it grows

```
swipe file  →  adopted properties  →  rules  →  tokens / components  →  every channel
content/swipes   adopted[].ruleId      content/rules.yaml   packages/tokens
```

1. **Collect.** `npm run new:swipe some-slug https://source.url` creates `content/swipes/some-slug/index.md`. Put a screenshot next to it and set `cover: ./cover.png`.
2. **Distill.** Under `adopted:`, list exactly what you like. Link each item to a rule `id` in `content/rules.yaml`, adding a new rule there with `status: proposed` or `trial` if needed. The build fails if a swipe links to a rule that doesn't exist. Write a rule’s `do` and `dont` as plain sentences, and add a matching visual pair to `apps/site/src/data/rule-examples.ts`.
3. **Adopt.** When a rule changes a value, edit `packages/tokens/src/tokens.ts`. Theme CSS, JSON, the UnoCSS preset and the site all regenerate from it.
4. **Log it.** Add an entry to `content/changelog.yaml`, and run `npm run changeset` if a package changed.

## Repository

| Path | What it is |
| --- | --- |
| `packages/tokens` | `@domhabersack/tokens`: the single source of truth, published to npm |
| `packages/slidev-theme` | `@domhabersack/slidev-theme-dombo`: master slides for Slidev, published to npm |
| `apps/site` | Astro + Tailwind v4 single-page design system, deployed to GitHub Pages |
| `apps/demo-deck` | Slidev deck showing every layout, deployed at `/dombo/slides/` |
| `content/` | Swipe file, rules and changelog (the editable data) |

## Commands

```sh
npm install
npm run dev            # design system site at localhost:4321/dombo
npm run dev:deck       # demo deck at localhost:3030
npm run build:pages    # what CI deploys: tokens + site + deck in apps/site/dist
npm run new:swipe <slug> [url]
npm run changeset      # describe a package change for the next release
```

## Using it elsewhere

**Tailwind v4 projects**

```sh
npm install @domhabersack/tokens
```

```css
@import "tailwindcss";
@import "@domhabersack/tokens/theme.css";   /* brand-*, accent-*, neutral-*, success-*, ... + ease-*, animate-* */
@import "@domhabersack/tokens/motion.css";  /* motion variables, reveal-on-scroll, reduced-motion guard */
```

Note that `neutral-*` is re-pointed to Tailwind's **zinc**, so it replaces Tailwind's built-in `neutral` gray. Fonts are self-hosted: install `@fontsource-variable/inter` and `@fontsource-variable/jetbrains-mono` and import them once.

The theme also redefines Tailwind's `dark:` variant. By default it follows the OS. Set `data-theme="light"` or `data-theme="dark"` on `<html>` to override it, for example from a theme switch. Write components light-first and add `dark:` classes for dark mode.

**Slidev presentations**

```sh
npm install @domhabersack/slidev-theme-dombo
```

```yaml
---
theme: '@domhabersack/slidev-theme-dombo'
---
```

**Email and social images**: read hex values from `@domhabersack/tokens/tokens.json`.

## Publishing

- **Site:** pushing to `main` runs `.github/workflows/pages.yml`. In the repo settings, enable Pages with the source set to "GitHub Actions".
- **Packages:** `.github/workflows/release.yml` uses Changesets. It opens a "Version packages" PR, and merging that PR publishes to npm. It needs an `NPM_TOKEN` repository secret, and the `@domhabersack` scope must exist on npm.
