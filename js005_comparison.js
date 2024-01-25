/**
 COMPARISON OPERATOR
 * >,<,>=,<=,==,!=

 */
let val1 = "2"
let val2 = 2
console.log(val1 == val2) // true
/**
 because it check the content of the variable
 for that we use ===(strict comparison)
 */
console.log(val1 === val2) // false

console.log("COMPARING NULL VALUE")
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

console.log("COMPARING UNDEFINED")
console.log(undefined == 0) //false
console.log(undefined > 0) //false
console.log(undefined < 0) //false