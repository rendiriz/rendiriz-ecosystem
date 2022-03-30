const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['ui']);
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

module.exports = withPlugins([[withTM, { reactStrictMode: true }]], {
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
});
