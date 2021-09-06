module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  rules: {
    'vetur.validation.template': false,
    'vue/require-default-prop': 'off',
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
}
