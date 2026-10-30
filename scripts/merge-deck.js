// Copy the built demo deck into the site's output so it is served at /dombo/slides/.
import { cpSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')
const deck = join(root, 'apps/demo-deck/dist')
const target = join(root, 'apps/site/dist/slides')
if (!existsSync(deck)) throw new Error('apps/demo-deck/dist is missing. Run the deck build first.')
cpSync(deck, target, { recursive: true })
console.log('Copied demo deck to apps/site/dist/slides')
