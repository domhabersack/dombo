import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    // Reach the deck from other devices on the network.
    allowedHosts: ['mac-mini.local'],
  },
})
