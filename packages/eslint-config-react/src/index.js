export default {
  extends: [
    '@morlay/eslint-config',
    'eslint-config-airbnb',
  ].map(require.resolve),
  rules: {
    'jsx-quotes': [2, 'prefer-single'],
  },
};
