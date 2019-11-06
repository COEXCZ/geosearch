module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['plugin:prettier/recommended'], // 'google'
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
}

