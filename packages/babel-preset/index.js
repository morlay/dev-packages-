module.exports = {
  presets: [
    'babel-preset-es2016',
    'babel-preset-stage-3',
  ].map(require.resolve),
  plugins: [
    'babel-plugin-transform-export-extensions',
    'babel-plugin-transform-es2015-spread',
    'babel-plugin-transform-es2015-parameters',
    'babel-plugin-transform-es2015-destructuring',
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-decorators-legacy',
  ].map(require.resolve),
};
