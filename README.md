## Dev Packages

packages for my own node project.

### Structure

[Monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) like

### Grouped Packages

#### `@morlay/babel-preset`

[![npm][babel-preset-badge]][babel-preset]
[![dependences][babel-preset-deps-badge]][babel-preset-deps]

[babel-preset]: https://www.npmjs.com/package/@morlay/babel-preset
[babel-preset-badge]: https://img.shields.io/npm/v/@morlay/babel-preset.svg

[babel-preset-deps]: https://david-dm.org/morlay/dep-packages?path=packages/babel-preset
[babel-preset-deps-badge]: https://david-dm.org/morlay/dep-packages.svg?path=packages/babel-preset

Provide `babel` CLIs and the preset which is based `es2016` `stage-2` and plugins below:

* [babel-preset-env](https://github.com/babel/babel-preset-env)
* [babel-preset-stage-3](http://babeljs.io/docs/plugins/preset-stage-3/)
* [babel-preset-react](http://babeljs.io/docs/plugins/preset-react/)
* [babel-plugin-transform-export-extensions](http://babeljs.io/docs/plugins/transform-export-extensions/)
* [babel-plugin-transform-class-properties](http://babeljs.io/docs/plugins/transform-class-properties/)
* [babel-plugin-transform-decorators-legacy](http://babeljs.io/docs/plugins/transform-decorators/)

```json
{
  "presets": [
    ["@morlay/babel-preset", {
      "targets": {
        "node": "6"
      }
    }]
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

* Provide CLI [eslint](https://github.com/eslint/eslint) 
* Mixed [eslint-airbnb](https://github.com/airbnb/javascript) with custom rules; Run flow with eslint when `@flow`;

```yml
extends: '@morlay/eslint-config'
```
