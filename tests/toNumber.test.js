import toNumber from '../utility-library/src/toNumber.js';

describe('toNumber.js basic functionality', () => {
    test('should return number as-is', () => {
        expect(toNumber(3.2)).toBe(3.2);
    });

    test('should convert string number to number', () => {
        expect(toNumber('3.2')).toBe(3.2);
    });

    test('should handle Number.MIN_VALUE', () => {
        expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
    });

    test('should handle Infinity', () => {
        expect(toNumber(Infinity)).toBe(Infinity);
    });

    test('should handle negative numbers', () => {
        expect(toNumber('-10.5')).toBe(-10.5);
    });

    test('should convert binary strings', () => {
        expect(toNumber('0b1010')).toBe(10);
    });

    test('should convert octal strings', () => {
        expect(toNumber('0o12')).toBe(10);
    });

    test('should handle whitespace trimming', () => {
        expect(toNumber('  42  ')).toBe(42);
    });

    test('should return NaN for bad hex', () => {
        expect(isNaN(toNumber('-0x123'))).toBe(true);
    });

    test('should return 0 for value 0', () => {
        expect(toNumber(0)).toBe(0);
    });
});