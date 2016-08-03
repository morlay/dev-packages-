module.exports = {
  presets: [
    'babel-preset-es2016',
    'babel-preset-stage-2',
  ].map(require.resolve),
  plugins: [
    'babel-plugin-transform-es2015-destructuring',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-export-extensions',
    'babel-plugin-transform-decorators-legacy',
  ].map(require.resolve),
};
