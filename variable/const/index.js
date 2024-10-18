// const
const lastName = "12312";
const lastName;
console.log(lastName);
//Uncaught SyntaxError: Identifier 'lastName' has already been declared

const y = 10;
// Here x is 10
{
const y = 2;
// Here x is 2
}
{
 const y = 20;
 // Here x is 2
 }
console.log(y);
// Here x is 10

