import { calculator } from "../src/calculator.js";

describe('calculator', () => {
    test('calculator exists', () => {
        expect(typeof calculator).toBe('object');
    });

    describe('add function of calculator', () => {
        test('the add function exists', () => {
            expect(typeof calculator.add).toBe('function');
        });

        test('the add function takes 2 parameters (a and b) and returns the sum of them (a + b)', () => {
            expect(calculator.add(1, 2)).toBe(3);
            expect(calculator.add(-1, 1)).toBe(0);
            expect(calculator.add(1245, -23)).toBe(1222);
            expect(calculator.add(1.25, 0.5)).toBe(1.75);
        });

        test('checking the validity of input for the add function', () => {
            expect(calculator.add(1, 1, 1)).toBe('Invalid input. The function takes only 2 arguments.');
            expect(calculator.add(1)).toBe('Invalid input. The function requires 2 arguments.');
        });
    });

    describe('substract function of calculator', () => {
        test('the subtract function exists', () => {
            expect(typeof calculator.subtract).toBe('function');
        });

        test('the subtract function takes 2 parameters (a and b) and returns difference between them (a - b)', () => {
            expect(calculator.subtract(1, 1)).toBe(0);
            expect(calculator.subtract(-1, 1)).toBe(-2);
            expect(calculator.subtract(-1, -1)).toBe(0);
            expect(calculator.subtract(1.25, 0.5)).toBe(0.75);
        });

        test('checking the validity of input for the subtract function', () => {
            expect(calculator.subtract(1, 1, 1)).toBe('Invalid input. The function takes only 2 arguments.');
            expect(calculator.subtract(1)).toBe('Invalid input. The function requires 2 arguments.');
        });
    });

    describe('divide function of the calculator', () => {
        test('the divide function exists', () => {
            expect(typeof calculator.divide).toBe('function');
        });

        test('the divide function takes 2 parameters (a and b) and returns difference between them (a - b)', () => {
            expect(calculator.divide(1, 1)).toBe(1);
            expect(calculator.divide(-1, 1)).toBe(-1);
            expect(calculator.divide(-1, -1)).toBe(1);
            expect(calculator.divide(1.25, 0.5)).toBe(2.5);
        });

        test('checking the validity of input for the divide function', () => {
            expect(calculator.divide(1, 1, 1)).toBe('Invalid input. The function takes only 2 arguments.');
            expect(calculator.divide(1)).toBe('Invalid input. The function requires 2 arguments.');
        });
    });

    describe('multiply function of the calculator', () => {
        test('the multiply function exists', () => {
            expect(typeof calculator.multiply).toBe('function');
        });

        test('the multiply function takes 2 parameters (a and b) and returns difference between them (a - b)', () => {
            expect(calculator.multiply(1, 1)).toBe(1);
            expect(calculator.multiply(-1, 1)).toBe(-1);
            expect(calculator.multiply(-1, -1)).toBe(1);
            expect(calculator.multiply(1.25, 0.5)).toBe(0.625);
        });

        test('checking the validity of input for the multiply function', () => {
            expect(calculator.multiply(1, 1, 1)).toBe('Invalid input. The function takes only 2 arguments.');
            expect(calculator.multiply(1)).toBe('Invalid input. The function requires 2 arguments.');
        });
    });
});