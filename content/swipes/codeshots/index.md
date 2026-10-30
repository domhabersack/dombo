---
title: Codeshots
author: Dom Habersack
captured: 2026-10-29
tags: [own project, saas, forms]
adopted:
  - property: Zinc for every neutral, with sky as the only accent
    ruleId: zinc-neutrals
  - property: H1 in font-black with tracking-tight
    ruleId: headings-black
  - property: Inputs with a zinc-300 border that turns accent on focus with a soft ring-4 halo at 10%
    ruleId: input-focus-halo
  - property: Inter and JetBrains Mono, both self-hosted through next/font/local
    ruleId: self-hosted-fonts
  - property: size-* for square elements, and gap on a flex-col parent instead of sibling margins
    ruleId: size-for-squares
---

Dom's code screenshot app. Built with Tailwind v4 and Headless UI, with no custom CSS at all. Text is mostly `text-sm` in medium and semibold, color transitions take 150ms, and badges are `rounded-md` chips in a 100/700 shade pair.
