module.exports = {
  presets: [
    'babel-preset-es2016',
    'babel-preset-stage-2',
  ].map(require.resolve),
  plugins: [
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-export-extensions',
    'babel-plugin-transform-decorators-legacy',
    'babel-plugin-transform-runtime',
  ].map(require.resolve),
};
