## Dev Packages

packages for my own node project.

**Notice: npm must be updated to 3**

### Structure

[Monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md)~~

Since `npm@3` flatten all dependences and move all `bin`s into root `.bin` of node_packages,
we could add cli dependences in the grouped package to scope them and install dependences by group

### Grouped Packages

#### `@morlay/babel-presets` [![@morlay/babel-presets][babel-presets-badge]][babel-presets]

Provide `babel` CLIs and the preset which is based `es2015` and plugins below:

* `babel-plugin-transform-object-rest-spread`
* `babel-plugin-transform-class-properties`
* `babel-plugin-transform-export-extensions`
* `babel-plugin-transform-runtime`
* `babel-plugin-transform-decorators-legacy`

```json
{
  "presets": [
    "@morlay/babel-presets"
  ]
}  
```

#### `@morlay/babel-presets-react` [![@morlay/babel-presets-react][babel-presets-react-badge]][babel-presets-react]

Extends `@morlay/babel-presets` and merged `babel-preset-react`

#### `@morlay/eslint-config` [![@morlay/eslint-config][eslint-config-badge]][eslint-config]

Provide [eslint](https://github.com/eslint/eslint) CLIs.
eslint config with parser [babel-eslint](https://github.com/babel/babel-eslint)
and [eslint-config-airbnb-base](https://github.com/airbnb/javascript)

```yml
extends: '@morlay/eslint-config'
```

#### `@morlay/eslint-config-react` [![@morlay/eslint-config-react][eslint-config-react-badge]][eslint-config-react]

Base on `@morlay/eslint-config` and mixed [eslint-config-airbnb](https://github.com/airbnb/javascript).
But a personal rule for react

```yml
jsx-quotes:
  - 2,
  - 'prefer-single'
```

#### `@morlay/test-utils` [![@morlay/test-utils][test-utils-badge]][test-utils]

* [mocha](https://mochajs.org/)
* [chai](http://chaijs.com/)
* [sinon](http://sinonjs.org/)

For chai, only expose `expect`

#### `@morlay/test-utils-react` [![@morlay/test-utils-react][test-utils-react-badge]][test-utils-react]

Extends `@morlay/test-utils` and added

* [mocha-jsdom](https://github.com/rstacruz/mocha-jsdom)
* [enzyme](https://github.com/airbnb/enzyme)
* [chai-enzyme](https://github.com/producthunt/chai-enzyme)


[babel-presets]: https://www.npmjs.com/package/@morlay/babel-presets
[babel-presets-badge]: https://img.shields.io/npm/v/@morlay/babel-presets.svg?style=flat-square

[babel-presets-react]: https://www.npmjs.com/package/@morlay/babel-presets-react
[babel-presets-react-badge]: https://img.shields.io/npm/v/@morlay/babel-presets-react.svg?style=flat-square

[eslint-config]: https://www.npmjs.com/package/@morlay/eslint-config
[eslint-config-badge]: https://img.shields.io/npm/v/@morlay/eslint-config.svg?style=flat-square

[eslint-config-react]: https://www.npmjs.com/package/@morlay/eslint-config-react
[eslint-config-react-badge]: https://img.shields.io/npm/v/@morlay/eslint-config-react.svg?style=flat-square

[test-utils]: https://www.npmjs.com/package/@morlay/test-utils
[test-utils-badge]: https://img.shields.io/npm/v/@morlay/test-utils.svg?style=flat-square

[test-utils-react]: https://www.npmjs.com/package/@morlay/test-utils-react
[test-utils-react-badge]: https://img.shields.io/npm/v/@morlay/test-utils-react.svg?style=flat-square
