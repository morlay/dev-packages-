/* eslint global-require: 0 */

module.exports = {
  presets: [
    require('babel-preset-es2015'),
  ],
  plugins: [
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-export-extensions'),
    require('babel-plugin-transform-runtime'),
    require('babel-plugin-transform-decorators-legacy').default,
  ],
};
