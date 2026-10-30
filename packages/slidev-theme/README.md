# @domhabersack/slidev-theme-dombo

The [Slidev](https://sli.dev) theme for Dom Habersack's design system.

```sh
npm install @domhabersack/slidev-theme-dombo
```

```yaml
---
theme: '@domhabersack/slidev-theme-dombo'
transition: rise        # optional: rise | soft-slide | any Slidev transition
---
```

## Layouts

| Layout | Frontmatter |
| --- | --- |
| `cover` | `eyebrow`, `author` (defaults to the deck's author), `date` |
| `section` | `number` |
| `default` | none |
| `two-cols` | `split` (e.g. `2fr 3fr`), with the `::right::` slot |
| `image-left` / `image-right` | `image`, `fit: cover \| contain`, `caption` |
| `statement` | none |
| `quote` | `author`, `role` |
| `fact` | `value`, `label` |
| `demo` | `image`, `url` (a screenshot in browser chrome), plus the `::screen::` slot |
| `end` | `contact` |

## Components

`<Callout type="info|success|warning|danger" title>`, `<Stat value label delta trend="up|down">`, `<Badge color>`, `<BrowserFrame src url>`, `<Logo>`.

Token colors work as UnoCSS classes: `text-brand-600`, `bg-neutral-50`, `ring-success-600/20` and so on.

To develop the theme in isolation, run `npm run dev -w packages/slidev-theme` (it uses `example.md` with `theme: ./`). The full showcase is `apps/demo-deck`.
