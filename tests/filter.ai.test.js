// __tests__/filter.test.js
import filter from '../utility-library/src/filter.js';

describe('filter function', () => {
    test('should filter array based on predicate', () => {
        const array = [1, 2, 3, 4, 5];
        const result = filter(array, x => x % 2 === 0);
        expect(result).toEqual([2, 4]);
    });

    test('should return empty array when input array is empty', () => {
        const result = filter([], x => x > 0);
        expect(result).toEqual([]);
    });

    test('should return empty array when predicate matches nothing', () => {
        const array = [1, 2, 3];
        const result = filter(array, x => x > 10);
        expect(result).toEqual([]);
    });

    test('should return same array when predicate matches everything', () => {
        const array = [1, 2, 3];
        const result = filter(array, () => true);
        expect(result).toEqual(array);
        expect(result).not.toBe(array); // new array returned
    });

    test('should not modify the original array', () => {
        const array = [1, 2, 3];
        filter(array, x => x > 1);
        expect(array).toEqual([1, 2, 3]);
    });

    test('predicate should receive correct arguments', () => {
        const array = ['a', 'b', 'c'];
        const mockPredicate = jest.fn();
        filter(array, mockPredicate);
        expect(mockPredicate).toHaveBeenCalledTimes(array.length);
        array.forEach((val, idx) => {
            expect(mockPredicate).toHaveBeenCalledWith(val, idx, array);
        });
    });

    test('should handle null input array by returning empty array', () => {
        const result = filter(null, x => x);
        expect(result).toEqual([]);
    });

    test('should handle undefined input array by returning empty array', () => {
        const result = filter(undefined, x => x);
        expect(result).toEqual([]);
    });

    test('should handle large arrays efficiently', () => {
        const largeArray = Array.from({ length: 10000 }, (_, i) => i);
        const result = filter(largeArray, x => x % 2 === 0);
        expect(result.length).toBe(5000);
        expect(result[0]).toBe(0);
        expect(result[result.length - 1]).toBe(9998);
    });

    test('should work with objects and match documentation example', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred', active: false }
        ];
        const result = filter(users, ({ active }) => active);
        expect(result).toEqual([{ user: 'barney', active: true }]);
    });

    test('should handle predicate that throws error gracefully', () => {
        const array = [1, 2, 3];
        const faultyPredicate = () => { throw new Error('fail'); };
        expect(() => filter(array, faultyPredicate)).toThrow('fail');
    });

    test('should handle mixed types in array', () => {
        const array = [1, '2', null, undefined, {}, []];
        const result = filter(array, x => x != null);
        expect(result).toEqual([1, '2', {}, []]);
    });
});
