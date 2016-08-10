import { expect } from '@morlay/tests';
import { transform } from 'babel-core';

import babelPreset from '../index';

describe(__filename, () => {
  it('should transform code correctly', () => {
    expect(() => {
      console.log(transform(`
        export test from 'test'; 
        const fn = ({ a, ...others }) => ({
          ...others,
        });
        
        @fn
        class Test {
          static a = 1;
          constructor() {
          }
        }
        
        export {
          fn
        }
      `
        , {
          presets: [
            babelPreset,
          ],
        }).code);
    }).to.not.throw();
  });
});
