/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 *
 * Свойство `salary` нельзя удалять.
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

const person = {
    rate : null,
    get salary(){
        const now = new Date();
        const dayToday = now.getDate();
        if(this.rate && typeof this.rate === 'number') {
            return this.rate * dayToday;
        } else {
            return 0;
        }
    }
};

Object.defineProperty(person, 'rate', {
    enumerable: false,
    configurable: false,
});
Object.defineProperty(person, 'salary', {
    enumerable: false,
    configurable: false,
});

// Решение

person.rate = 30;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300

exports.person = person;
