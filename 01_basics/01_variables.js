const accountId = 23015301
let accountEmail = "ankit@google.com"
var accountPassword = "12345"
let accountCity = "Jaipur"

accountEmail = "singh@gmail.com"
accountPassword = "34567"
accountCity = "Patna"
// accountId = 2
console.log(accountId);

/*
prefer not to use "var" 
bcz of issue in block scope and functional scope
*/

console.table([accountEmail,  accountPassword, accountCity])
