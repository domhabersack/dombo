// Scaffold a swipe file entry: npm run new:swipe <slug> [source-url]
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const [slug, source] = process.argv.slice(2)
if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error('Usage: npm run new:swipe <slug> [source-url]   (slug: lowercase letters, digits, dashes)')
  process.exit(1)
}

const dir = join(import.meta.dirname, '..', 'content', 'swipes', slug)
if (existsSync(dir)) {
  console.error(`content/swipes/${slug} already exists`)
  process.exit(1)
}
mkdirSync(dir, { recursive: true })

const today = new Date().toISOString().slice(0, 10)
const title = slug.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase())
writeFileSync(
  join(dir, 'index.md'),
  `---
title: ${title}
${source ? `source: ${source}` : '# source: https://where-you-found-it.com'}
author: Who made it
captured: ${today}
# Drop a screenshot (png, jpg or webp) next to this file and point to it:
# cover: ./cover.png
tags: []
# Each property you want to keep, linked to a rule id from content/rules.yaml.
# Add the rule there first if it doesn't exist yet.
adopted: []
#  - property: What exactly you like about it
#    ruleId: fewer-borders
---

What makes this work, in a sentence or two.
`,
)
console.log(`Created content/swipes/${slug}/index.md`)
