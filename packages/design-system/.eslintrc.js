module.exports = {
  ...require('config/eslint-stencil'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
