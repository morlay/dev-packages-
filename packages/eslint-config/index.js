module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint-config-airbnb-base',
  ].map(require.resolve),
  env: {
    mocha: true,
  },
};
