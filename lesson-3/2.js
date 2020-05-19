/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку example. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

function checkSpam(source, example) {
    if(typeof source === 'string' && typeof example === 'string') {
        const sourceToLowerCase = source.toLowerCase();
        const exampleToLowerCase = example.toLowerCase();
        const index = sourceToLowerCase.indexOf(exampleToLowerCase);

        if(index !== -1) {
            return true;
        }
    }

    return false;
}

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
