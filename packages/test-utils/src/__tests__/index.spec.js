import * as apis from '../index';

describe(__filename, () => {
  it('expect, sinon should be exports', () => {
    apis.expect(apis).to.have.property('expect');
    apis.expect(apis).to.have.property('sinon');
  });
});
