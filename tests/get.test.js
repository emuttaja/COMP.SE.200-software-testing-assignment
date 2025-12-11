import get from '../utility-library/src/get.js';

describe('get.js basic functionality', () => {
    test('should get nested property with dot notation', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        expect(get(object, 'a[0].b.c')).toBe(3);
    });

    test('should get nested property with array path', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    });

    test('should return default value for undefined path', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        expect(get(object, 'a.b.c', 'default')).toBe('default');
    });

    test('should handle null object', () => {
        expect(get(null, 'a.b.c', 'default')).toBe('default');
    });

    test('should handle undefined object', () => {
        expect(get(undefined, 'a.b', 'default')).toBe('default');
    });

    test('should get top-level property', () => {
        const object = { name: 'John' };
        expect(get(object, 'name')).toBe('John');
    });
});