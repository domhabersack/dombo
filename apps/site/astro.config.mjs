// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://domhabersack.github.io',
  base: '/dombo',
  trailingSlash: 'ignore',
  server: {
    // Reach the dev and preview servers from other devices on the network.
    allowedHosts: ['mac-mini.local'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
