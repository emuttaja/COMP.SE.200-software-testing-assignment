import filter from '../utility-library/src/filter.js';

describe('filter.js basic functionality', () => {
    test('UT-01 should filter greater than 3', () => {
        const result = filter([1, 2, 3, 4, 5], (x) => x > 3);
        expect(result).toEqual([4, 5]);
    });
});