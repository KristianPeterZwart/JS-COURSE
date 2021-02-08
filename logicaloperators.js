
// Logical AND (&&)
// Returns TRUE if both operands are TRUE
// console.log(true && true)

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE

let highIncome = false
let goodCreditScore = false
let eligibleForLoan = highIncome && goodCreditScore
console.log('Eligible', eligibleForLoan)

// NOT (!)
let applicationRefused = !eligibleForLoan
console.log('Application Refused', applicationRefused)

// LOGICAL OPERATORS with non Boolean values

// result of logical expression is not necessarily a true or false
// depends on the VALUE of the Operands

// Truthy or Falsy 

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy 

false || 1 || 2 // this would equal 1 as soon as a truthy is found it stops

// Short-circuiting

let userColour = undefined
let defaultColour = 'blue'
let currentColour = userColour || defaultColour

console.log(currentColour)
