/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех переданных числовых аргументов.
 *
 * Условия:
 * - Функция должна принимать любое количество аргументов;
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение

const f = function () {
    let result = 0;

    for (let item of arguments) {
        if(typeof item !== 'number') {
            throw new Error('В качестве входного аргумента был передан не числовой тип');
        }

        result += item;
    }

    return result;
};

console.log(f(1, 1, 1, 2, 1, 1, 1, 1)); // 9

exports.f = f;
