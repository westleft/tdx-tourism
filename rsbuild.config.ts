import { defineConfig } from '@rsbuild/core'
import { pluginSass } from '@rsbuild/plugin-sass'
import { pluginVue } from '@rsbuild/plugin-vue'

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginSass({
      sassLoaderOptions: {
        additionalData: `@import "@styles/index.scss";`,
      },
    }),
  ],
  source: {
    alias: {
      '@styles': './src/assets/styles',
      '@img': './src/assets/images',
      '@/': 'src/*',
    },
  },
  dev: {
    liveReload: false,
    hmr: false,
  },
})
