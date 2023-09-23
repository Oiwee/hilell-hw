'use strict'

//Различие между let и const, лучше всегда использовать const, так как его нельзя заново переписать

const numberOne = prompt('Введите первое число')
const numberTwo = prompt('Введите второе число')

//обычная функция и return(без него функция возвращает undefined)
// function addition(a,b) {
//     return a+b
// }

//функция стрелочная, но она записана не в одну строчку, поэтому она не будет ничего возвращать без return)
// const addition = (a, b) => {
//     +a + +b
// }

//стрелочная функция, задаем переменную, потом пишем два зчения(любые названия), которые приманиет моя функция.
//так как это стрелочная функция, то ее можно записать в одну строчку и значение после стрелочки будет сразу возвращено (return)
const addition = (a, b) => +a + +b

// строки нельзя минусовать, делить, умножать. Поэтому необязательно приводить их (a,b) в number
const subtraction = (a, b) => a-b
const multiplication = (a, b) => a*b
const divide = (a, b) => a/b


//Тут выводим string + number
console.log(`результат: ${numberOne} + ${numberTwo} =`, addition(numberOne, numberTwo))
//Тут выводим все строкой(string) потому, что шаблонные строки (``) превращают результат addition в строку(string)
console.log(`результат: ${numberOne} + ${numberTwo} = ${addition(numberOne, numberTwo)}`)

console.log(`результат: ${numberOne} - ${numberTwo} =`, subtraction(numberOne, numberTwo))
console.log(`результат: ${numberOne} * ${numberTwo} =`, multiplication(numberOne, numberTwo))
console.log(`результат: ${numberOne} / ${numberTwo} =`, divide(numberOne, numberTwo))