module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  globals: {
    App: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-empty': [0],
    'no-useless-escape': [0],
    'prefer-rest-params': [0],
    'no-case-declarations': [0],
    'require-atomic-updates': [0],
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/no-explicit-any': [0],
    '@typescript-eslint/explicit-member-accessibility': [0],
    '@typescript-eslint/no-non-null-assertion': [0],
    '@typescript-eslint/triple-slash-reference': [0],
    'react/jsx-uses-vars': 2,
    '@typescript-eslint/array-type': [2, { default: 'array-simple' }],
    '@typescript-eslint/no-var-requires': [0],
    '@typescript-eslint/no-unused-vars': [0],
    '@typescript-eslint/ban-ts-ignore': [0],
    '@typescript-eslint/class-name-casing': [0],
    '@typescript-eslint/no-use-before-define': [0],
    '@typescript-eslint/no-empty-function': [0],
    '@typescript-eslint/ban-ts-comment': [0],
    '@typescript-eslint/explicit-module-boundary-types': [0],
    'no-prototype-builtins': [0],
  },
};
