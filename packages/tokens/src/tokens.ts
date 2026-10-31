/**
 * Single source of truth for the design system.
 *
 * Colors alias Tailwind palette names, so `brand` and `neutral` can be
 * re-pointed without touching consumers. Everything else either reuses
 * Tailwind's defaults (spacing, radius, shadow, type scale) or adds the
 * few things Tailwind lacks: semantic roles and motion.
 */

export const palette = {
  brand: 'fuchsia',
  accent: 'amber',
  neutral: 'zinc',
  success: 'emerald',
  warning: 'amber',
  danger: 'rose',
  info: 'sky',
} as const

export const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const

export const fonts = {
  // Self-hosted (@fontsource-variable/inter, @fontsource-variable/jetbrains-mono), never a font CDN.
  sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  display: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
  // Email clients rarely load web fonts; fall back gracefully.
  email: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif'],
}

/** Semantic type roles, expressed as Tailwind classes (light and dark). */
export const typeRoles = {
  display: 'text-5xl/tight font-black tracking-tight text-balance text-neutral-900 dark:text-white',
  h1: 'text-4xl/tight font-black tracking-tight text-balance text-neutral-900 dark:text-white',
  h2: 'text-2xl/snug font-black tracking-tight text-neutral-900 dark:text-white',
  h3: 'text-lg/7 font-black text-neutral-900 dark:text-white',
  lead: 'text-lg/8 text-neutral-600 dark:text-neutral-400',
  body: 'text-base/7 text-neutral-700 dark:text-neutral-300',
  small: 'text-sm/6 text-neutral-600 dark:text-neutral-400',
  caption: 'text-xs/5 font-medium text-neutral-500 dark:text-neutral-400',
} as const

/** Constrained spacing scale (Tailwind steps) we actually reach for. */
export const spacing = [1, 2, 3, 4, 6, 8, 12, 16, 24, 32] as const

export const radius = {
  control: 'rounded-lg',
  badge: 'rounded-md',
  card: 'rounded-xl',
  panel: 'rounded-2xl',
  pill: 'rounded-full',
} as const

/**
 * Elevation comes from background lightness, not shadows. Only things that
 * float above the page (menus, popovers, dialogs) get a shadow.
 */
export const elevation = {
  page: 'bg-neutral-50 dark:bg-neutral-950',
  surface: 'bg-white dark:bg-neutral-900',
  inset: 'bg-neutral-100 dark:bg-neutral-800/60',
  overlay: 'bg-white shadow-lg ring-1 ring-neutral-900/5 dark:bg-neutral-800 dark:ring-white/10',
  modal: 'bg-white shadow-2xl ring-1 ring-neutral-900/10 dark:bg-neutral-800 dark:ring-white/10',
} as const

export const motion = {
  duration: { instant: 75, fast: 150, base: 200, slow: 300, slower: 500 },
  ease: {
    // Quick start, long gentle settle: for things entering.
    out: 'cubic-bezier(0.16, 1, 0.3, 1)',
    // Symmetric: for things moving between two states.
    'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
    // Accelerating: for things leaving.
    in: 'cubic-bezier(0.7, 0, 0.84, 0)',
    // Slight overshoot: for small confirmations only.
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  distance: { sm: '4px', md: '8px', lg: '16px' },
} as const

export const tokens = { palette, shades, fonts, typeRoles, spacing, radius, elevation, motion }
export default tokens
