module.exports = function* map(iterable, callback) {
    let index = 0,
        previousValue,
        value;

    for (value of iterable) {
        yield callback(value, index, previousValue);

        previousValue = value;
        index += 1;
    }
};
