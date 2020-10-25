const typeScriptFileExtensions = ['.ts', '.tsx'];

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/extensions': typeScriptFileExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': typeScriptFileExtensions,
    },
    'import/resolver': {
      node: {
        extensions: typeScriptFileExtensions,
      },
      typescript: {},
    },
  },
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    'react/jsx-filename-extension': ['error', { extensions: typeScriptFileExtensions }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/prop-types': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
