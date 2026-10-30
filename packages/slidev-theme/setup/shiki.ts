import type { ShikiSetup } from '@slidev/types'

// Light and dark code themes that sit quietly next to the zinc neutrals.
const setup: ShikiSetup = () => ({
  themes: {
    light: 'github-light',
    dark: 'github-dark-dimmed',
  },
})

export default setup
