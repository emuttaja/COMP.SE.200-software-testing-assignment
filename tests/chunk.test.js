import chunk from '../utility-library/src/chunk.js';

describe('chunk.js basic functionality', () => {
    test('should chunk array into size 2', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    });

    test('should handle uneven chunks', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
    });

    test('should handle empty array', () => {
        expect(chunk([], 2)).toEqual([]);
    });

    test('should use default size of 1', () => {
        expect(chunk(['a', 'b', 'c'])).toEqual([['a'], ['b'], ['c']]);
    });

    test('should handle size larger than array', () => {
        expect(chunk(['a', 'b'], 5)).toEqual([['a', 'b']]);
    });

    test('should handle size less than 1', () => {
        expect(chunk(['a', 'b', 'c'], 0)).toEqual([]);
    });

    test('should handle null array', () => {
        expect(chunk(null, 2)).toEqual([]);
    });
});