// Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат. 
// Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя его повторно

const cache = function() {
    var lastArgument_a = null;
    var lastArgument_b = null;
    var lastCalculated = null;

    const value = (a, b) => {
        if (a === lastArgument_a && b === lastArgument_b) {
            params = {
                value: lastCalculated,
                fromCache: true
            };
        } else {
            params = {
                value: Math.pow(a, b),
                fromCache: false
            };
            lastArgument_a = a;
            lastArgument_b = b;
            lastCalculated = params.value;
        };
        return params;
    };
    return value;
};

const calculate = cache();

console.log(calculate(3, 3)); // { value: 27, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: false}
console.log(calculate(2, 10)); // { value: 1024, fromCache: true}

