/**
 * Задача 5.
 *
 * Создайте функцию `isPositive`, которая принимает число качестве аргумента.
 * Функция возвращает булевое значение.
 * Если число, переданное в аргументе положительное — возвращается true.
 * Если число, переданное в аргументе отрицательное — возвращается false.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве входного аргумента был передан не числовой тип;
 */

// Решение
const isPositive = function (param) {
    if (typeof param !== 'number') {
        throw new Error('В качестве входного аргумента был передан не числовой тип');
    } else if(param === 0) {
        throw new Error('Параметр должен быть больше или меньше 0');
    }
    const result = param > 0;

    return result;
};
console.log(isPositive(-3)); // false
console.log(isPositive(3)); // true

exports.isPositive = isPositive;
