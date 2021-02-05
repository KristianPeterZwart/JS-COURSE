// put variables inside a object - person object

// {} object literal

// let name = 'Kris'
// let age = 44

let person = {
    name: 'Kris',
    age: 44
}

// Dot Notation - BIT MORE CONCISE - SHORTER
person.name = 'Billy'

// Bracket Notation - may change at runtime
let selection = 'name'
person[selection] = 'Mary'

console.log(person.name)