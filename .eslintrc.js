module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'google',
    'plugin:prettier/recommended'
  ],
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
    'require-jsdoc': 'off', // disable googles JSDoc
    'no-unused-vars': 'warn', // change error log to warn
    'prettier/prettier': 'error'
  }
}

