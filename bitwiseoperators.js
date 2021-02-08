




// Read, Write, Execute 
// 00000100 // Read
// 00000110 // Read, Write
// 00000111 // Read, Write, Execute

// console.log(1 | 2) // Bitwise OR
// console.log(1 & 2) // Bitwise AND

const readPermission = 4
const writePermission = 2
const executePermission = 1

let myPermission = 0
myPermission = myPermission | writePermission // bitwise OR we can add permission

let message = (myPermission & readPermission) ? 'yes': 'no' // ternary operator bitwise and can check to see permission.

console.log(message)