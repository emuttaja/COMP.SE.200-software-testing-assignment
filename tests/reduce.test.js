import reduce from '../utility-library/src/reduce.js';

describe('reduce.js basic functionality', () => {
    test('should sum array elements with initial value', () => {
        const result = reduce([1, 2], (sum, n) => sum + n, 0);
        expect(result).toBe(3);
    });

    test('should work without initial value', () => {
        const result = reduce([1, 2, 3], (sum, n) => sum + n);
        expect(result).toBe(6);
    });

    test('should reduce object to grouped values', () => {
        const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key);
            return result;
        }, {});
        expect(result['1']).toEqual(expect.arrayContaining(['a', 'c']));
        expect(result['2']).toEqual(['b']);
    });

    test('should handle empty array with initial value', () => {
        const result = reduce([], (sum, n) => sum + n, 10);
        expect(result).toBe(10);
    });

    test('should provide index to iteratee', () => {
        const indices = [];
        reduce([10, 20, 30], (acc, val, idx) => {
            indices.push(idx);
            return acc;
        }, 0);
        expect(indices).toEqual([0, 1, 2]);
    });
});