import { expect } from '@morlay/tests';
import { transform } from 'babel-core';

import babelPreset from '../index';

describe(__filename, () => {
  it('should transform code correctly', () => {
    expect(() => {
      transform(`
        export test from 'test'; 
        const fn = ({ a, ...others }) => ({
          ...others,
        });
        export {
          fn
        }
      `
        , {
          presets: [
            babelPreset,
          ],
        });
    }).to.not.throw();
  });
});
