const accountId=1234
//mostly we use Let keyword to define variables// prefer not to use var because of the issue with block scop and functional scope
let accountEmail="tasneem@gmail.com"
var accountPassword="1234"
accountCity="jaipur"
let accountStates


//we can change the values of let ,var, 
accountEmail="shakil@gmail.com"
accountPassword="3364"
accountCity="mumbai"
// accountId=3614 -const variable is not allowed & we can not change it.
console.log(accountId); //to print only one value


/*
to print all the value in one console.log function
*/
console.log([accountId,accountEmail,accountPassword,accountCity])
/*

to print all the value in table we use console.table function
*/
console.table([accountId,accountEmail,accountPassword,accountCity])

//when we print variable with no values then its is by default undefine
console.log(accountStates)
