/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение
const createArray = ( value, count ) => {
    if(typeof value !== 'string' && typeof value !== 'object' && !Array.isArray(value)) {
        throw new Error('Param should be a string or object or array');
    }

    const array = new Array(count);

    return array.fill(value);
};
const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
