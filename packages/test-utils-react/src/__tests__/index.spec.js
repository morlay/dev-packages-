import * as apis from '../index';

describe(__filename, () => {
  it(`
    expect, sinon, 
    jsdom, 
    shallow, mount, render,
    should be exports`, () => {
    apis.expect(apis).to.have.property('expect');
    apis.expect(apis).to.have.property('jsdom');
    apis.expect(apis).to.have.property('sinon');
    apis.expect(apis).to.have.property('shallow');
    apis.expect(apis).to.have.property('mount');
    apis.expect(apis).to.have.property('render');
  });

  it(`
    expect should have chaiEnzyme extends`, () => {
    const holder = apis.expect().to.be;
    apis.expect(holder).to.have.property('checked');
    apis.expect(holder).to.have.property('className');
    apis.expect(holder).to.have.property('attr');
  });
});
