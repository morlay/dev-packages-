import babelPresetEs2015 from 'babel-preset-es2015';
import babelPluginTransformObjectRestSpread from 'babel-plugin-transform-object-rest-spread';
import babelPluginTransformClassProperties from 'babel-plugin-transform-class-properties';
import babelPluginTransformExportExtensions from 'babel-plugin-transform-export-extensions';
import babelPluginTransformRuntime from 'babel-plugin-transform-runtime';
import babelPluginTransformDecoratorsLegacy from 'babel-plugin-transform-decorators-legacy';

module.exports = {
  presets: [
    babelPresetEs2015,
  ],
  plugins: [
    babelPluginTransformObjectRestSpread,
    babelPluginTransformClassProperties,
    babelPluginTransformExportExtensions,
    babelPluginTransformRuntime,
    babelPluginTransformDecoratorsLegacy,
  ],
};
