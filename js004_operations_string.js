let val = 3
let negVal = -val
console.log(negVal)

let first_name = "Mrityunjay"
let last_name = "Maharana"
console.log(first_name+" "+last_name)

console.log("1" + 2) //12(string)
console.log(1 + "2") //12(string)
console.log("1" + "2") //12(string)

console.log("1" + 2 + 2) // operations starts from left hand
// output will be "1"+2 =12 and "12"+2 =122

console.log(1 + 2 + "2")
// output will be 1+2 = 3 and 3+"2" = 32

/* 
+ is unary operator is used to converts its 
operand to a number. when applied to boolean value 
the boolean value implicitly converted to number
*/
console.log(+true) //1
console.log(+"") //0


let num1, num2, num3;
num1 = num2 = num3 = 4;

let gameCounter = 30
gameCounter++ // increment operator
console.log(gameCounter)