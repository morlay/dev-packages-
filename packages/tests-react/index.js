const chai = require('@morlay/tests').chai;
const chaiEnzyme = require('chai-enzyme');

chai.use(chaiEnzyme());

exports.expect = chai.expect;
exports.sinon = require('@morlay/tests').sinon;
exports.shallow = require('enzyme').shallow;
exports.mount = require('enzyme').mount;
exports.render = require('enzyme').render;
