/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение

const f = function (param) {
    if(typeof param !== 'number') {
        throw new Error('Переданный параметр не число ');
    }

    const result = param * param * param;

    return result;
};

console.log(f(2)); // 8

exports.f = f;
