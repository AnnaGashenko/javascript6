/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение
const postpone = function (start, end, delay) {
    if(typeof start !== 'number') {
        throw new Error('First param should be a number');
    }

    if(typeof end !== 'number') {
        throw new Error('Second param should be a number');
    }

    if(typeof delay !== 'number') {
        throw new Error('Third param should be a number');
    }

    setTimeout(() => {
        if(start < end) {
            for(let i = start; i <= end; i++){
                console.log(i);
            }
        } else {
            for(let i = start; i >= end; i--){
                console.log(i);
            }

        }
    }, delay);
};

try {
    postpone(1, 3, 1000);
// 1
// 2
// 3
    postpone(3, 1, 1000);
// 3
// 2
// 1
} catch(error) {
    console.log(`${error.name}: ${error.message}`);
}


exports.postpone = postpone;
