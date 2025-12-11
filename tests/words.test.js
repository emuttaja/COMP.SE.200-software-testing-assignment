import words from '../utility-library/src/words.js';

describe('words.js basic functionality', () => {
    test('should split string into words', () => {
        expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
    });

    test('should handle custom pattern', () => {
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
    });

    test('should handle empty string', () => {
        expect(words('')).toEqual([]);
    });

    test('should handle camelCase', () => {
        const result = words('camelCaseWord');
        expect(result.length).toBeGreaterThan(0);
    });

    test('should handle string with numbers', () => {
        const result = words('hello123world');
        expect(result).toEqual(['hello', '123', 'world']);
    });
});