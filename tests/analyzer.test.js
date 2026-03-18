import { analyze } from '../src/analyzer.js';

describe('analyzer function', () => {
    test('analyzer function exists', () => {
        expect(typeof analyze).toBe('function');
    });

    test('analyzer function takes array and returns an object', () => {
        expect(typeof analyze([1, 2, 3])).toBe('object');
    });

    test('analyzer function takes array and returns the object with following values: average, min, max, and length', () => {
        expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
        expect(analyze([10, 4, 6, 2, 8])).toEqual({ average: 6, min: 2, max: 10, length: 5 });
        expect(analyze([3, 5, 7, 2, 8, 1])).toEqual({ average: 4.33, min: 1, max: 8, length: 6 });
        expect(analyze([9, 3, 5, 7])).toEqual({ average: 6, min: 3, max: 9, length: 4 });
    });

    test('analyzer function coverage of edge cases', () => {
        expect(analyze([])).toEqual({ average: NaN, min: undefined, max: undefined, length: 0 });
        expect(analyze([1, "2", 3])).toEqual({ average: 2, min: 1, max: 3, length: 3 });
        expect(analyze([Infinity, -Infinity, 0])).toEqual({ average: NaN, min: -Infinity, max: Infinity, length: 3 });
        expect(analyze([NaN, 4, 6])).toEqual({ average: 5, min: 4, max: 6, length: 3 });
    });
});