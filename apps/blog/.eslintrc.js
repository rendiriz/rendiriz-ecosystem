module.exports = {
  ...require('config/eslint-astro'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
