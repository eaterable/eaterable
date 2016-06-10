const map = require('./map');

describe(map.name, () => {
    it('should lazily return last value of sequence', () => {
        const spy = sinon.spy();
        const iterator = map([10,20,30], spy);

        spy.should.not.have.been.called();

        [...iterator];

        spy.callCount.should.eq(3);
        spy.getCall(0).should.be.calledWithExactly(10, 0, undefined);
        spy.getCall(1).should.be.calledWithExactly(20, 1, 10);
        spy.getCall(2).should.be.calledWithExactly(30, 2, 20);
    });
});
