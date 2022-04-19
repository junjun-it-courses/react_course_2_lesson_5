// Расширение возможностей литералов объекта

function getCar(make, model, value) {
    return {
        // с синтаксисом короткой записи можно
        // пропускать значение свойства, если оно
        // совпадает с именем переменной, значение
        // которой мы хотим использовать
        make,  // аналогично make: make
        model, // аналогично model: model
        value, // аналогично value: value

        // вычисляемые свойства теперь работают в
        // литералах объекта
        ['make' + make]: true,

        // Короткая запись метода объекта пропускает
        // ключевое слово `function` и двоеточие. Вместо
        // "depreciate: function() {}" можно написать:
        depreciate() {
            this.value -= 2500;
        }
    };
}

let car = getCar('Kia', 'Sorento', 40000);
console.log(car);
// {
//     make: 'Kia',
//     model:'Sorento',
//     value: 40000,
//     makeKia: true,
//     depreciate: function()
// }