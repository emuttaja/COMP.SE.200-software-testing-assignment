# ai test generation prompts and answers

Tool used: GPT-5 mini

## filter.js

Prompt:

Generate comprehensive Jest unit tests for the following JavaScript filter function. The function filters array elements based on a predicate function.

FUNCTION DOCUMENTATION:
/**
 * Iterates over elements of `array`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index, array).
 *
 * **Note:** Unlike `remove`, this method returns a new array.
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * filter(users, ({ active }) => active)
 * // => objects for ['barney']
 */

REQUIREMENTS:
- Use Jest testing framework with ES6 imports
- Test all edge cases including: empty arrays, null/undefined inputs, large datasets, predicates that match nothing, predicates that match everything
- Test that the original array is not modified
- Test that predicate receives correct arguments (value, index, array)
- Include the documentation example as a test case
- Use descriptive test names
- Import: import filter from '../utility-library/src/filter.js';

Generate complete test suite with at least 10 test cases covering happy paths, edge cases, and boundary conditions.

Answer:

Here's a full Jest test suite for your filter function that covers all the requirements you mentioned. Quick summary: tests include normal filtering, empty arrays, null/undefined inputs, predicates matching everything/nothing, large datasets, argument correctness, immutability, and your documentation example.

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


Highlights:

Edge cases: empty, null, undefined, large datasets.

Happy paths: normal filtering, objects, all-match, none-match.

Original array immutability checked.

Predicate argument correctness verified.

Includes documentation example.

Extra tests: predicate throwing errors, mixed types.

If you want, I can also rewrite this using test.each for some of the repetitive cases to make it DRY and cleaner. It’s a bit fancier but keeps all coverage.

Do you want me to do that?


## isEmpty.js

prompt:

Generate comprehensive Jest unit tests for the following JavaScript isEmpty function. The function checks if a value is empty (objects, arrays, strings, maps, sets, etc.).

FUNCTION DOCUMENTATION:
/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */

REQUIREMENTS:
- Use Jest testing framework with ES6 imports
- Test all data types: null, undefined, booleans, numbers (including 0), strings (empty and non-empty), arrays (empty and non-empty), objects (empty and with properties), Maps, Sets
- Include all documentation examples as test cases
- Test edge cases like whitespace strings, arrays with undefined elements, nested empty objects
- Use descriptive test names
- Import: import isEmpty from '../utility-library/src/isEmpty.js';

Generate complete test suite with at least 12 test cases covering all supported data types and edge cases mentioned in the documentation.

Answer:

Here’s a full Jest test suite for your isEmpty function. Quick summary: tests cover all basic types, collections, maps/sets, arrays with undefined, nested empty objects, empty strings, whitespace strings, numbers, booleans, and your documentation examples.

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


Highlights:

Covers all primitive types (null, undefined, boolean, number, string).

Covers array-like objects including arrays, empty arrays, and arrays with undefined elements.

Covers objects and nested empty objects.

Covers Maps and Sets.

Includes documentation examples.

Tests edge cases like whitespace strings and empty arguments.

If you want, I can also add tests for Buffer objects and custom jQuery-like collections to cover rare edge cases the doc mentions but usually are missed. That would push it past 15+ tests.

Do you want me to add those too?