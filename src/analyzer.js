export const analyze = function (array) {
    if (array.length === 0) return { average: NaN, min: undefined, max: undefined, length: 0 };

    const numbers = array.filter(
        (x) => typeof x === "number" && !Number.isNaN(x)
    );

    const min = numbers.length ? Math.min(...numbers) : undefined;
    const max = numbers.length ? Math.max(...numbers) : undefined;

    const { sum, count } = array.reduce(
        (acc, curr) => {
            if (typeof curr === "number" && !Number.isNaN(curr)) {
                acc.sum += curr;
                acc.count++;
            }
            return acc;
        },
        { sum: 0, count: 0 }
    );

    let average = count ? sum / count : NaN;
    const length = array.length;

    if (typeof average === "number" && !Number.isInteger(average)) {
        average = Number(average.toFixed(2)); // or any number of decimals
    }

    return { average: average, min: min, max: max, length: length };
}