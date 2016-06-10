const chai = require('chai');
const sinonChai = require('sinon-chai');
const dirty = require('dirty-chai');

chai.use(sinonChai);
chai.use(dirty);
chai.should();

global.expect = chai.expect;
global.sinon = require('sinon');
