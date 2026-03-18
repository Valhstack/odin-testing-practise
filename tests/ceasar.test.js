import { cipher } from "../src/ceasar.js";

describe('cipher', () => {
    test('the cipher function exists', () => {
        expect(typeof cipher).toBe('function');
    });

    test('the cipher function takes a string and a shift value and returns the encoded string', () => {
        expect(cipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
        expect(cipher('xyz', 3)).toBe('abc');
        expect(cipher('HeLLo', 3)).toBe('KhOOr');
    });
});