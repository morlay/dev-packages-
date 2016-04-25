import { chai, sinon } from '@morlay/test-utils';

import chaiEnzyme from 'chai-enzyme';
import jsdom from 'mocha-jsdom';

import {
  shallow,
  mount,
  render,
} from 'enzyme';

chai.use(chaiEnzyme());

const expect = chai.expect;

export {
  expect,
  jsdom,
  sinon,
  shallow,
  mount,
  render,
};
