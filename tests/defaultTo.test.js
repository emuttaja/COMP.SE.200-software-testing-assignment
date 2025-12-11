import defaultTo from '../utility-library/src/defaultTo.js';

describe('defaultTo.js basic functionality', () => {
    test('should return value when not null/undefined', () => {
        expect(defaultTo(1, 10)).toBe(1);
    });

    test('should return default for undefined', () => {
        expect(defaultTo(undefined, 10)).toBe(10);
    });

    test('should return default for null', () => {
        expect(defaultTo(null, 10)).toBe(10);
    });

    test('should return default for NaN', () => {
        expect(defaultTo(NaN, 10)).toBe(10);
    });

    test('should return 0 as valid value', () => {
        expect(defaultTo(0, 10)).toBe(0);
    });

    test('should return false as valid value', () => {
        expect(defaultTo(false, 10)).toBe(false);
    });

    test('should return empty string as valid value', () => {
        expect(defaultTo('', 10)).toBe('');
    });
});