import capitalize from '../utility-library/src/capitalize.js';

describe('capitalize.js basic functionality', () => {
    test('should capitalize FRED to Fred', () => {
        expect(capitalize('FRED')).toBe('Fred');
    });

    test('should handle already capitalized', () => {
        expect(capitalize('Fred')).toBe('Fred');
    });

    test('should handle lowercase', () => {
        expect(capitalize('fred')).toBe('Fred');
    });

    test('should handle empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('should handle single character', () => {
        expect(capitalize('f')).toBe('F');
    });
});