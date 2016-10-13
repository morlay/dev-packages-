// @flow

import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import test, { AssertContext } from 'ava';
import { transform } from 'babel-core';

import babelPreset from '../index';

const source = String(fs.readFileSync(path.join(__dirname, './fixtures/babel.js')));

test('should transform code for node env', (t: AssertContext): any => {
  t.notThrows(() => {
    const res = transform(source, {
      presets: [
        [babelPreset, {
          targets: {
            node: '6',
          },
        }],
      ],
    });

    t.true(_.includes(res.code, 'class Test'));
  });
});

test('should transform code for browsers', (t: AssertContext): any => {
  t.notThrows(() => {
    const res = transform(source, {
      presets: [
        [babelPreset, {
          targets: {
            browsers: 'last 2 safari versions',
          },
        }],
      ],
    });

    t.false(_.includes(res.code, 'class Test'));
  });
});
