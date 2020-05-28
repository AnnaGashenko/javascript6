/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение
const f = function (a, b, c) {
    if(typeof a !== 'number'){
        throw new Error(`Первый аргумент ${a} не число`);
    } else if(typeof b !== 'number'){
        throw new Error(`Второй аргумент ${b} не число`);
    } else if(typeof c !== 'number'){
        throw new Error(`Третий аргумент ${c} не число`);
    } else if(c === 0){
        throw new Error(`Третий аргумен не может быть 0`);
    }
    const result = (a - b) / c;

    return result;
};

console.log(f("some", 3, 2)); // 3

exports.f = f;
