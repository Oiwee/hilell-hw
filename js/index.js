'use strict'

const user = {}

user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'

delete user.name

console.log(user)


// const user = {
//     name: "John"
// };
//
// // Це працюватиме? Да, потому что меняется свойство внутри объекта и ссылка остается такая же
//
// user.name = "Pete";




let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = salaries.John + salaries.Ann + salaries.Pete
console.log(sum)