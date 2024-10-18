//Always declare variables
// Always use const if the value should not be changed
// Always use const if the type should not be changed (Arrays and Objects)

// let
// Only use let if you can't use const

let firstName;

//multiple variables
let person = "John Doe",
  carName = "Volvo",
  price = 200;

let fullName;
console.log(fullName);

// undefined
// You cannot re-declare a variable declared with let or const.

let x = 2; // Allowed

{
  let x = 3; // Allowed
}

{
  let x = 4; // Allowed
}

console.log(4);
// Here x is 4

let exampleString = "hello world";
let exampleString;
console.log(exampleString);
//Uncaught SyntaxError: Identifier 'exampleString' has already been declared
