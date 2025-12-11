import filter from '../utility-library/src/filter.js';

describe('filter.js basic functionality', () => {
    test('UT-01 should filter greater than 3', () => {
        const result = filter([1, 2, 3, 4, 5], (x) => x > 3);
        expect(result).toEqual([4, 5]);
    });

    test('UT-02 should return empty array when no elements match', () => {
        const result = filter([1, 2, 3, 4, 5], (x) => x > 10);
        expect(result).toEqual([]);
    });

    test('UT-03 should handle empty array', () => {
        const result = filter([], (x) => x > 3);
        expect(result).toEqual([]);
    });

    test('UT-04 should handle null input', () => {
        const result = filter(null, (x) => x > 3);
        expect(result).toEqual([]);
    });

    test('UT-05 should not modify original array', () => {
        const original = [1, 2, 3, 4, 5];
        const copy = [...original];
        filter(original, (x) => x > 3);
        expect(original).toEqual(copy);
    });

    test('UT-06 should handle large datasets', () => {
        const large = [];
        for(let i = 0; i < 50000; i++){
            large.push(i);
        }
        const result = filter(large, (x) => x % 2 === 0);
        expect(result.length).toBe(25000);
    });
});