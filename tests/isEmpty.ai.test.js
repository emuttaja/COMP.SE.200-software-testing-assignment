// __tests__/isEmpty.test.js
import isEmpty from '../utility-library/src/isEmpty.js';

describe('isEmpty function', () => {
    test('should return true for null', () => {
        expect(isEmpty(null)).toBe(true);
    });

    test('should return true for undefined', () => {
        expect(isEmpty(undefined)).toBe(true);
    });

    test('should return true for boolean values', () => {
        expect(isEmpty(true)).toBe(true);
        expect(isEmpty(false)).toBe(true);
    });

    test('should return true for numbers including 0', () => {
        expect(isEmpty(0)).toBe(true);
        expect(isEmpty(42)).toBe(true);
        expect(isEmpty(-1)).toBe(true);
    });

    test('should return true for empty string', () => {
        expect(isEmpty('')).toBe(true);
    });

    test('should return false for non-empty string', () => {
        expect(isEmpty('abc')).toBe(false);
        expect(isEmpty(' ')).toBe(false); // whitespace is not empty
    });

    test('should return true for empty array', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('should return false for non-empty array', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
        expect(isEmpty([undefined])).toBe(false); // has element, even if undefined
    });

    test('should return true for empty object', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('should return false for object with properties', () => {
        expect(isEmpty({ a: 1 })).toBe(false);
    });

    test('should return true for empty Map and Set', () => {
        expect(isEmpty(new Map())).toBe(true);
        expect(isEmpty(new Set())).toBe(true);
    });

    test('should return false for non-empty Map and Set', () => {
        const map = new Map();
        map.set('key', 'value');
        const set = new Set();
        set.add(1);
        expect(isEmpty(map)).toBe(false);
        expect(isEmpty(set)).toBe(false);
    });

    test('should return true for nested empty objects', () => {
        expect(isEmpty({ a: {} })).toBe(false); // object has key 'a', even if empty
        expect(isEmpty({ a: { b: {} } })).toBe(false);
    });

    test('should return true for empty arguments object', () => {
        function testArgs() {
            return isEmpty(arguments);
        }
        expect(testArgs()).toBe(true);
        expect(testArgs(1)).toBe(false);
    });
});
