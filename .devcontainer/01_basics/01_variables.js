/*const value cannot be changed*/
const accountId = 144553
/*let and var value can be changed*/
let accountEmail = "vivekgaver2016@gmail.com"
/*Var is generally not used due to the issue in block scope and functional scope*/
var accountPassword = "12345678"
accountCity = "Delhi"

console.log(accountId);

/*Console.table will print all the variables in a tabular form */
console.table([accountId, accountEmail, accountPassword, accountPassword])