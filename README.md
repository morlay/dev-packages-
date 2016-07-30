## Dev Packages

packages for my own node project.

**Notice: npm must be updated to 3**

### Structure

[Monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md)~~

Since `npm@3` flatten all dependences and move all `bin`s into root `.bin` of node_packages,
we could add cli dependences in the grouped package to scope them and install dependences by group

### Grouped Packages

#### `@morlay/babel` [![@morlay/babel][babel-badge]][babel]

Provide `babel` CLIs and the preset which is based `es2016` `stage-2` and plugins below:

* `babel-plugin-transform-class-properties`
* `babel-plugin-transform-export-extensions`
* `babel-plugin-transform-decorators-legacy`

* `babel-plugin-transform-runtime`

```json
{
  "presets": [
    "@morlay/babel"
  ]
}
```

#### `@morlay/eslint` [![@morlay/eslint][eslint-badge]][eslint]

Provide [eslint](https://github.com/eslint/eslint) CLIs.
eslint config with parser [babel-eslint](https://github.com/babel/babel-eslint)
and [eslint-airbnb-base](https://github.com/airbnb/javascript)

```yml
extends: '@morlay/eslint'
```
For React mixed [eslint-airbnb](https://github.com/airbnb/javascript).

```yml
extends: '@morlay/eslint/react'
jsx-quotes:
  - 2,
  - 'prefer-single'
```

#### `@morlay/tests` [![@morlay/tests][tests-badge]][tests]

* [mocha](https://mochajs.org/)
* [chai](http://chaijs.com/)
* [sinon](http://sinonjs.org/)

For chai, only expose `expect`

#### `@morlay/tests-react` [![@morlay/tests-react][tests-react-badge]][tests-react]

Extends `@morlay/tests` and added

* [mocha-jsdom](https://github.com/rstacruz/mocha-jsdom)
* [enzyme](https://github.com/airbnb/enzyme)
* [chai-enzyme](https://github.com/producthunt/chai-enzyme)

[babel]: https://www.npmjs.com/package/@morlay/babel
[babel-badge]: https://img.shields.io/npm/v/@morlay/babel.svg?style=flat-square

[eslint]: https://www.npmjs.com/package/@morlay/eslint
[eslint-badge]: https://img.shields.io/npm/v/@morlay/eslint.svg?style=flat-square

[tests]: https://www.npmjs.com/package/@morlay/tests
[tests-badge]: https://img.shields.io/npm/v/@morlay/tests.svg?style=flat-square

[tests-react]: https://www.npmjs.com/package/@morlay/tests-react
[tests-react-badge]: https://img.shields.io/npm/v/@morlay/tests-react.svg?style=flat-square
