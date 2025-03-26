import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ 這樣才會正確對應 `@/utils/`
    },
  },
})
