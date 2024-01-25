const accountId = 144553; // constant throughout the scope
let accountEmail = "mrityunjay@gmail.com";
var accountPassword = "12345";

/*
we also declare variable without specifying let, 
var and const but it is not a good practise.
*/
accountCity = "Jaipur";

/*
if we only declare the variable and not initialise
it then when we print the value we will get
'undefined' as result.
*/
let accountState;


// accountId = 2 // not allowed

accountEmail = "mr@gmail.com";
accountPassword = "6789";
accountCity = "Bengaluru";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
prefer not to use var because of issue in block
scope and functional scope.

prefer to use const and let.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
