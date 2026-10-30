# @domhabersack/tokens

Design tokens for Dom Habersack's design system. The source is `src/tokens.ts`. Run `npm run build` to regenerate the files below.

| Import | Contents |
| --- | --- |
| `@domhabersack/tokens/theme.css` | Tailwind v4 `@theme`: semantic color scales (brand, accent, neutral, success, warning, danger, info), fonts, easings, `animate-*` |
| `@domhabersack/tokens/motion.css` | Plain CSS: `--motion-*` variables, keyframes, `[data-animate]` reveal, reduced-motion and `data-motion="off"` guards |
| `@domhabersack/tokens/tokens.json` | Resolved values, including hex for every color (for email and image tools) |
| `@domhabersack/tokens/uno` | `presetDombo()`, a UnoCSS preset (used by the Slidev theme) |
| `@domhabersack/tokens` | The same data as tokens.json, as an ES module |

Documentation: https://domhabersack.github.io/dombo/
