import isEmpty from '../utility-library/src/isEmpty.js';

describe('isEmpty.js basic functionality', () => {
    test('UT-01 empty string should return true', () => {
        expect(isEmpty('')).toBe(true);
    });

    test('UT-02 non-empty string should return false', () => {
        expect(isEmpty('xyz')).toBe(false);
    });

    test('UT-03 whitespace string should return false', () => {
        expect(isEmpty(' ')).toBe(false);
    });

    test('UT-04 empty array should return true', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('UT-05 non-empty array should return false', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('UT-06 null should return true', () => {
        expect(isEmpty(null)).toBe(true);
    });

    test('UT-07 number should return false', () => {
        expect(isEmpty(12)).toBe(false);
    });

    test('UT-08 zero should return false', () => {
        expect(isEmpty(0)).toBe(false);
    });

    test('UT-09 false should return false', () => {
        expect(isEmpty(false)).toBe(false);
    });
});