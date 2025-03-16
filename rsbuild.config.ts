import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginSass } from '@rsbuild/plugin-sass'

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginSass({
      sassLoaderOptions: {
        additionalData: `@import "@styles/index.scss";`
      }
    })
  ],
  source: {
    alias: {
      "@styles": "./src/assets/styles",
      "@img": "./src/assets/images",
      "@": "./src/"
    }
  }
});
