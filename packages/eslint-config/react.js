module.exports = {
  extends: [
    'eslint-config-airbnb',
    './index',
  ].map(require.resolve),
};
