
// greet is parameter of the function
function greet(name, lastname) { 
    console.log('Hello ' + name + ' ' + lastname)
}
// name john is a argument of the function 
greet('Kris', 'Zwart') 
greet('Joe Jer', 'Tee')

// Calculating a value for (CLEAN CODE example rather than concatenating)
function square(number) {
    return number * number;
}

console.log(square(2));