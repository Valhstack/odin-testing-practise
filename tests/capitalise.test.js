import { capitalise } from "../src/capitalise.js";

describe('capitalise', () => {
    test('the module is defined', () => {
        expect(typeof capitalise).toBe('function');
    });

    test('returns string with first character capitalised', () => {
        expect(capitalise('sun')).toBe('Sun');
        expect(capitalise('moon')).toBe('Moon');
        expect(capitalise('earth')).toBe('Earth');
    });

    test('checks for the empty string', () => {
        expect(capitalise('')).toBe('');
    });

    test('keeps the first letter capitalised if it is capitalised already', () => {
        expect(capitalise('Venus')).toBe('Venus');
    });
});