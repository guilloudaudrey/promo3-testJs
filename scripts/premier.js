function add(a, b) {
    if (typeof(a) != 'number' || typeof(b) !== 'number') {
        throw new Error('expect numbers as parameters')
    }
    return a + b;
}

function substract(a, b) {
    return a - b;
}