/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

const flat = function(array) {
    const newArray = [];

    const getArray = function (array) {
        if (!Array.isArray(array)) {
            throw new Error('Param should be an array');
        }

        for(let i = 0; i < array.length; i++) {
            if(!Array.isArray(array[i]) && typeof array[i] !== 'number') {
                throw new Error('Param should be an array or number');
            }

            if(!Array.isArray(array[i])) {
                newArray.push(array[i]);
            } else {
                getArray(array[i]);
            }
        }
    };

    getArray(array);

    return newArray;
};

const collect = function (array) {
    const newArray = flat(array);

    // const newArray = array.flat(Infinity);
    const result = newArray.reduce((sum, current) => {
        if(typeof current !== 'number') {
            throw new Error('Param should be a number');
        }

        return sum + current;
    }, 0);

    return result;
};

const array1 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
console.log(collect(array1)); // 36

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

exports.collect = collect;
