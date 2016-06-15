import { transform } from 'babel-core';
import babelPresets from '../index';

describe(__filename, () => {
  it(`code with 
  ObjectRestSpread, ClassProperties, ExportExtensions, Decorators
  should be transformed`, () => {
    console.log(transform(`
      @test
      class Text {
        static s = {
          ...a,
          b: 1,
        };
      }
      
      export * from 'fs';
    `, {
      presets: [
        babelPresets,
      ],
    }).code);
  });
});
