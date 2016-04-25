module.exports = {
  parser: 'babel-eslint',
  extends: [
    require.resolve('eslint-config-airbnb-base'),
  ],
  env: {
    mocha: true,
  },
};