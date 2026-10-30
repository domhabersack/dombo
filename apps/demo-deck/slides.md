---
theme: '@domhabersack/slidev-theme-dombo'
title: Dombo slide templates
info: Every master layout and component in @domhabersack/slidev-theme-dombo.
layout: cover
eyebrow: Slidev theme
author: Dom Habersack
date: October 2026
transition: rise
mdc: true
---

# Dombo slide templates

Every master layout in one deck. Copy the frontmatter of the one you need.

---
layout: section
number: 1
---

# Layouts

Each slide makes one point.

---

# Default

The `default` layout is for plain content: a headline, a lead paragraph and a short list.

- Hierarchy comes from **weight and color**, not size
- Body text is `text-lg`, and lists stay short
- Use `v-click` to reveal points one at a time

<v-clicks>

- Revealed with a small rise
- Then the next one

</v-clicks>

---
layout: two-cols
---

# Two columns

Use `two-cols` with the `::right::` slot. Set `split: 2fr 3fr` for uneven columns.

::right::

<div class="grid gap-4">
  <Stat label="Monthly revenue" value="$48,210" delta="+12.4%" />
  <Stat label="Churn" value="2.1%" delta="+0.3 pts" trend="down" />
</div>

---
layout: image-right
image: /screenshot.svg
caption: Image from the deck’s public/ folder
---

# Image right

`image-right` and `image-left` split the slide in half. Use `fit: contain` for diagrams.

---
layout: statement
---

# Design in grayscale first, then add color with purpose.

---
layout: quote
author: Refactoring UI
role: paraphrased
---

Start with too much white space, then remove it until you’re happy with the result.

---
layout: fact
value: 3×
label: Faster to build a deck when the layouts are already decided
---

Use `fact` for one number that matters.

---
layout: demo
url: app.example.com/dashboard
image: /screenshot.svg
---

## Demo

The `demo` layout frames a product screenshot in browser chrome.

---

# Components

<div class="grid grid-cols-2 gap-6 mt-6">
  <Callout title="Heads up">Callouts come in info, success, warning and danger.</Callout>
  <Callout type="success" title="Shipped">Tokens v0.1.0 is on npm.</Callout>
  <div class="flex flex-wrap gap-2 items-start">
    <Badge>New</Badge>
    <Badge color="success">Active</Badge>
    <Badge color="warning">Pending</Badge>
    <Badge color="danger">Failed</Badge>
    <Badge color="neutral">Draft</Badge>
  </div>
  <Logo />
</div>

---

# Code

```ts {2|3}
import { presetDombo } from '@domhabersack/tokens/uno'
export default defineConfig({
  presets: [presetDombo()],
})
```

---
layout: end
contact: domhabersack.com
---

# Thank you
