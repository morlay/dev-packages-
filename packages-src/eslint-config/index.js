// @flow

module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
    'flowtype-errors',
  ],
  extends: [
    'plugin:flowtype/recommended',
    require.resolve('eslint-config-airbnb'),
  ],
  rules: {
    'flowtype-errors/show-errors': 2,

    'jsx-quotes': [2, 'prefer-single'],
    'arrow-parens': 0,
    'no-confusing-arrow': 0,
    'global-require': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0, // No, JSX belongs to .js files
    'react/forbid-prop-types': 0, // use Flow types.
    'react/no-unused-prop-types': 0, // use Flow types.
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
