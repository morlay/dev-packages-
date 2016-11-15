const extraPlugins = [
  'babel-plugin-transform-export-extensions',
  'babel-plugin-transform-class-properties',
  'babel-plugin-transform-decorators-legacy',
];

export default (context, opts = {}) => ({
  presets: [
    [require.resolve('babel-preset-env'), opts],
    require.resolve('babel-preset-stage-3'),
    require.resolve('babel-preset-react'),
  ],
  plugins: extraPlugins.map(require.resolve),
});
