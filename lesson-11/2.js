/**
 * Задача 2.
 *
 * Создайте функцию createFibonacciGenerator(),
 * которая вернёт ещё одну функцию,
 * каждый вызов которой будет возвращать число из последовательности Фибоначчи.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение

const createFibonacciGenerator = () => {
    let prev = 1;
    let current = 0;

    return () => {
        const result = current + prev;
        prev = current;
        current = result;

        return result;
    };

};

const generateFibonacciNumber = createFibonacciGenerator();

console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 1
console.log(generateFibonacciNumber()); // 2
console.log(generateFibonacciNumber()); // 3
console.log(generateFibonacciNumber()); // 5
console.log(generateFibonacciNumber()); // 8
console.log(generateFibonacciNumber()); // 13

exports.createFibonacciGenerator = createFibonacciGenerator;
