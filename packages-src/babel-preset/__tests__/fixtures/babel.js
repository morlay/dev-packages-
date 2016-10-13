import ava from 'ava';

const fn = ({ a, ...others }) => ({
  a,
  ...others,
});

@fn
class Test {
  static a = 1;

  constructor() {
    this.ava = ava;
  }
}

export {
  fn,
};

export default Test;

export * as babel from 'babel-core';
