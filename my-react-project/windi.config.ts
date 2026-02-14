import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,html}'],
    exclude: ['node_modules', '.git', 'dist']
  },
  theme: {
    extend: {}
  },
  plugins: []
})