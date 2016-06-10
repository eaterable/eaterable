const {expect} = require('chai');
const last = require('./last');

describe(last.name, () => {
    it('should handle empty sequences', () => {
        expect(last('')).to.be.undefined();
        expect(last([])).to.be.undefined();
        expect(last(empty())).to.be.undefined();
    });

    it('should return last value of sequence', () => {
        last('abc').should.eq('c');
        last([1,2,3]).should.eq(3);
        last(sequence([1,2,3])).should.eq(3);
    });

    function* empty() {}
    function* sequence(array) { yield* array; }
});
