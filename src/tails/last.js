module.exports = function last(iterable) {
    let value = undefined;
    for (value of iterable);
    return value;
};
