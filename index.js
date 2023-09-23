const numberOne = +prompt('Введите первое число')
const numberTwo = +prompt('Введите второе число')
const action = prompt('Какое действие хотите сделать? Варианты: add, sub, mult, div')

const addition = (a, b) => a + b
const subtraction = (a, b) => a-b
const multiplication = (a, b) => a*b
const divide = (a, b) => a/b

if (action) {
    if (action==='add') {
        alert(`${numberOne} + ${numberTwo} = ${addition(numberOne, numberTwo)}`)
    }
    // action==='add' && alert(`${numberOne} + ${numberTwo} = ${addition(numberOne, numberTwo)}`)
    // action==='add' && alert(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`)
    if (action==='sub') {
        alert(`${numberOne} - ${numberTwo} = ${subtraction(numberOne, numberTwo)}`)
    }
    // action==='sub' && alert(`${numberOne} + ${numberTwo} = ${subtraction(numberOne, numberTwo)}`)
    if (action==='mult') {
        alert(`${numberOne} * ${numberTwo} = ${multiplication(numberOne, numberTwo)}`)
    }
    //action==='mult' && alert(`${numberOne} * ${numberTwo} = ${multiplication(numberOne, numberTwo)}`)
    if (action==='div') {
        alert(`${numberOne} / ${numberTwo} = ${divide(numberOne, numberTwo)}`)
    }
    //action==='div' && alert(`${numberOne} / ${numberTwo} = ${divide(numberOne, numberTwo)}`)
}



