let score = 98
console.log(score)
console.log(typeof(score))// number

score = "98"
console.log(score)
console.log(typeof(score))// string

// to convert string to number

let valInNumber = Number(score)
console.log(valInNumber)
console.log(typeof(valInNumber))

// one special feature of javaScript

let combinedVal = "33abc"
let result = Number(combinedVal)
console.log(typeof(combinedVal))// 'number'

// but it consist of abc
console.log(combinedVal) //NaN(Not a Number)

//------------ NULL --------------------
let nullVal = null
console.log(nullVal) // null
console.log(typeof(nullVal)) // object

let result2 = Number(nullVal)
console.log(result2) // 0
console.log(typeof(result2)) // number


//------------ UNDEFINED -----------------
let undVal = undefined
console.log(undVal)// undefined
console.log(typeof(undVal))// undefined

let result3 = Number(undVal)
console.log(result3)// NaN
console.log(typeof(result3))// number

//------------- STRING(ALPHABETS) ---------
let alphaVal = "Mrityunjay"
console.log(alphaVal)// Mrityunjay
console.log(typeof(alphaVal))// string

let result4 = Number(alphaVal)
console.log(result4)// NaN
console.log(typeof(result4))// number

//------------- BOOLEAN ---------------------
let boolVal = true
console.log(boolVal)// true
console.log(typeof(boolVal))// boolean

let result5 = Number(boolVal)
console.log(result5)// 1
console.log(typeof(result5))// number

//----------- CONVERT TO BOOL ---------------
let val = 1
let valToBool = Boolean(val);
console.log(valToBool)// true

let val2 = 0
let val2ToBool = Boolean(val2)
console.log(val2ToBool)// false

let val3 = ""
let val3ToBool = Boolean(val3)
console.log(val3ToBool)// false

let val4 = "hi"
let val4ToBool = Boolean(val4)
console.log(val4ToBool)// true

//-------------- CONVERT TO STRING ------------
let strVal = 343
let strValToString = String(strVal)
console.log(strValToString)