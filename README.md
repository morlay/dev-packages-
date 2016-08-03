## Dev Packages

packages for my own node project.

**Notice: npm must be updated to 3**

### Structure

[Monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md)~~

Since `npm@3` flatten all dependences and move all `bin`s into root `.bin` of node_packages,
we could add cli dependences in the grouped package to scope them and install dependences by group

### Grouped Packages

#### `@morlay/babel-preset`

[![npm][babel-preset-badge]][babel-preset]
[![dependences][babel-preset-deps-badge]][babel-preset-deps]

[babel-preset]: https://www.npmjs.com/package/@morlay/babel-preset
[babel-preset-badge]: https://img.shields.io/npm/v/@morlay/babel-preset.svg

[babel-preset-deps]: https://david-dm.org/morlay/dep-packages?path=packages/babel-preset
[babel-preset-deps-badge]: https://david-dm.org/morlay/dep-packages.svg?path=packages/babel-preset

Provide `babel` CLIs and the preset which is based `es2016` `stage-2` and plugins below:

* `babel-plugin-transform-class-properties`
* `babel-plugin-transform-export-extensions`
* `babel-plugin-transform-decorators-legacy`

* `babel-plugin-transform-runtime`

```json
{
  "presets": [
    "@morlay/babel-preset"
  ]
}
```

#### `@morlay/eslint-config`

[![npm][eslint-config-badge]][eslint-config]
[![dependences][eslint-config-deps-badge]][eslint-config-deps]

[eslint-config]: https://www.npmjs.com/package/@morlay/eslint-config
[eslint-config-badge]: https://img.shields.io/npm/v/@morlay/eslint-config.svg

[eslint-config-deps]: https://david-dm.org/morlay/dep-packages?path=packages/eslint-config
[eslint-config-deps-badge]: https://david-dm.org/morlay/dep-packages.svg?path=packages/eslint-config

Provide [eslint](https://github.com/eslint/eslint) CLIs.
eslint config with parser [babel-eslint](https://github.com/babel/babel-eslint)
and [eslint-airbnb-base](https://github.com/airbnb/javascript)

```yml
extends: '@morlay/eslint-config'
```
For React mixed [eslint-airbnb](https://github.com/airbnb/javascript).

```yml
extends: '@morlay/eslint-config/react'
jsx-quotes:
  - 2,
  - 'prefer-single'
```

#### `@morlay/tests`

[![npm][tests-badge]][tests]
[![dependences][tests-deps-badge]][tests-deps]

[tests]: https://www.npmjs.com/package/@morlay/tests
[tests-badge]: https://img.shields.io/npm/v/@morlay/tests.svg

[tests-deps]: https://david-dm.org/morlay/dep-packages?path=packages/tests
[tests-deps-badge]: https://david-dm.org/morlay/dep-packages.svg?path=packages/tests

* [mocha](https://mochajs.org/)
* [chai](http://chaijs.com/)
* [sinon](http://sinonjs.org/)

For chai, only expose `expect`

#### `@morlay/tests-react`

[![npm][tests-react-badge]][tests-react]
[![dependences][tests-react-deps-badge]][tests-react-deps]

[tests-react]: https://www.npmjs.com/package/@morlay/tests-react
[tests-react-badge]: https://img.shields.io/npm/v/@morlay/tests-react.svg

[tests-react-deps]: https://david-dm.org/morlay/dep-packages?path=packages/tests-react
[tests-react-deps-badge]: https://david-dm.org/morlay/dep-packages.svg?path=packages/tests-react

Extends `@morlay/tests` and added

* [mocha-jsdom](https://github.com/rstacruz/mocha-jsdom)
* [enzyme](https://github.com/airbnb/enzyme)
* [chai-enzyme](https://github.com/producthunt/chai-enzyme)
