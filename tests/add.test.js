const add = require('../src/add');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds -1 + 2 to equal 1', () => {
    expect(add(-1, 2)).toBe(1);
});

test('adds 100 + 200 to equal 300', () => {
    expect(add(100, 200)).toBe(300);
});
