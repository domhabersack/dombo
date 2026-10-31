import { defineConfig } from 'unocss'
import { presetDombo } from '@domhabersack/tokens/uno'

// Slidev merges this with its own config (presetWind3, attributify, icons),
// so the token colors (brand, neutral, success, ...) work like Tailwind classes.
export default defineConfig({
  presets: [presetDombo()],
  shortcuts: {
    // Slide background: white / neutral-950 instead of Slidev's #121212.
    'bg-main': 'bg-white dark:bg-neutral-950',
    'dombo-muted': 'text-neutral-500 dark:text-neutral-400',
    // Flat: cards are a background shift on the white slide, never a shadow.
    'dombo-card': 'rounded-xl bg-neutral-100 dark:bg-white/5',
  },
})
