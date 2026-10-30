import { defineCollection } from 'astro:content'
import { file, glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { parse } from 'yaml'

const categories = ['principle', 'color', 'type', 'spacing', 'depth', 'motion', 'component', 'channel'] as const

const rules = defineCollection({
  // Keep the order rules are written in; the file loader would sort them by id.
  loader: file('../../content/rules.yaml', {
    parser: (text) => parse(text).map((rule: object, order: number) => ({ ...rule, order })),
  }),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    category: z.enum(categories),
    title: z.string(),
    rule: z.string(),
    do: z.string().optional(),
    dont: z.string().optional(),
    status: z.enum(['adopted', 'trial', 'proposed']).default('adopted'),
  }),
})

const swipes = defineCollection({
  loader: glob({ pattern: '*/index.md', base: '../../content/swipes', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Optional: own projects may be private or not deployed yet.
      source: z.url().optional(),
      author: z.string(),
      captured: z.coerce.date(),
      cover: image().optional(),
      tags: z.array(z.string()).default([]),
      example: z.boolean().default(false),
      adopted: z
        .array(z.object({ property: z.string(), ruleId: z.string(), note: z.string().optional() }))
        .default([]),
    }),
})

// Keyed by version, so each entry's id is its version number.
const changelog = defineCollection({
  loader: file('../../content/changelog.yaml'),
  schema: z.object({
    date: z.coerce.date(),
    notes: z.array(z.string()),
  }),
})

export const collections = { rules, swipes, changelog }
