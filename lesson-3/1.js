/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(str) {
    if(typeof str === 'string' ) {
        return str[0].toUpperCase() + str.slice(1);
        // return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return `Переданный параметр ${str} не является строкой`;
}

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;
