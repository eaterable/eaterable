const chai = require('chai');
const sinonChai = require('sinon-chai');
const dirty = require('dirty-chai');

chai.use(sinonChai);
chai.use(dirty);
chai.should();

GLOBAL.expect = chai.expect;
GLOBAL.sinon = require('sinon');
