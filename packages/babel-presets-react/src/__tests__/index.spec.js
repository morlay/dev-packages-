import { transform } from 'babel-core';
import babelPresets from '../index';

describe(__filename, () => {
  it(`code with 
  React
  should be transformed`, () => {
    console.log(transform(`
      <div className='test'></div>
    `, {
      presets: [
        babelPresets,
      ],
    }).code);
  });
});
