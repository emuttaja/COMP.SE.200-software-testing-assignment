import map from '../utility-library/src/map.js';

describe('map.js basic functionality', () => {
    test('should map array elements', () => {
        const result = map([1, 2, 3], (n) => n * 2);
        expect(result).toEqual([2, 4, 6]);
    });

    test('should handle empty array', () => {
        const result = map([], (n) => n * 2);
        expect(result).toEqual([]);
    });

    test('should provide index to iteratee', () => {
        const result = map([10, 20, 30], (n, i) => n + i);
        expect(result).toEqual([10, 21, 32]);
    });

    test('should handle null input', () => {
        const result = map(null, (n) => n * 2);
        expect(result).toEqual([]);
    });
});