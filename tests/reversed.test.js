import { reverse } from "../src/reverse.js";

describe('reversed string', () => {
    test('the reverse function exists', () => {
        expect(typeof reverse).toBe('function');
    });

    test('the function returns the string reversed', () => {
        expect(reverse('sun')).toBe('nus');
        expect(reverse('moon')).toBe('noom');
        expect(reverse('earth')).toBe('htrae');
    });

    test('the function handles reserve for multiword string', () => {
        expect(reverse('buy this car')).toBe('rac siht yub');
    });

    test('the function handles correctly an empty string', () => {
        expect(reverse('')).toBe('');
    });

    test('the function reverses correctly when special characters are involved', () => {
        expect(reverse('Hello, World! How are you doing today?')).toBe('?yadot gniod uoy era woH !dlroW ,olleH');
    });
});