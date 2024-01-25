const prompt = require('prompt-sync')();

// functions in javaScript:

console.log("Functions in javaScript");

// AjavaScript function is a block of code designed to perform a particular task and is executed when "something" calls it.


function average(a,b)
{
  let avg = (a+b)/2;
  return avg;
}

let result = average(5,3);

console.log(result);

// function can be created in three ways:
//1. with parameter and no return value
//2. with parameter and return value
//3. with no parameter and return value

function hello(){
  console.log("Hi! everyone");
}
hello();

// we can also create function like this

const sum = (a,b)=>{
  s = a + b;
  return s;
}
// this type of function also called arrow function
console.log(sum(5,10));

const hola = ()=>{
  console.log("HOLA!!!");
}
hola();

// anonymous function
const Average = function(a, b, c) {
  return (a + b + c)/3;
}
let number1 = 20
let number2 = 50
let number3 = 10

let averageOfThree = Average(number1, number2, number3);
console.log(averageOfThree);

