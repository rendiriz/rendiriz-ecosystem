module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  plugins: ['import', '@typescript-eslint'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
  },
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['info', 'warn', 'error', 'assert'] }],
    '@typescript-eslint/naming-convention': 'off',
  },
  ignorePatterns: ['**/*.js', 'node_modules', '.turbo', 'dist', 'coverage'],
};
