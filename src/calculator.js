export const calculator = (function () {
    const add = function (a, b) {
        if (arguments.length > 2) {
            return 'Invalid input. The function takes only 2 arguments.';
        }
        else if (arguments.length < 2) return 'Invalid input. The function requires 2 arguments.';
        else if (arguments.length === 2) return a + b;
    };

    const subtract = function (a, b) {
        if (arguments.length > 2) {
            return 'Invalid input. The function takes only 2 arguments.';
        }
        else if (arguments.length < 2) return 'Invalid input. The function requires 2 arguments.';
        else if (arguments.length === 2) return a - b;
    };

    const divide = function (a, b) {
        if (arguments.length > 2) {
            return 'Invalid input. The function takes only 2 arguments.';
        }
        else if (arguments.length < 2) return 'Invalid input. The function requires 2 arguments.';
        else if (arguments.length === 2) return a / b;
    };

    const multiply = function (a, b) {
        if (arguments.length > 2) {
            return 'Invalid input. The function takes only 2 arguments.';
        }
        else if (arguments.length < 2) return 'Invalid input. The function requires 2 arguments.';
        else if (arguments.length === 2) return a * b;
    };

    return { add, subtract, divide, multiply };
})();