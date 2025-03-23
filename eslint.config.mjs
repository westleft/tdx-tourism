// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },

  typescript: true,
  vue: true,

  jsonc: false,
  yaml: false,

  ignores: [],

  rules: {
    'antfu/top-level-function': 'off',
    'style/brace-style': 'off', // ✅ 讓 catch 不換行
  },
})
