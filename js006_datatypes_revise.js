/**
 PRIMITIVE :
 7 types : ssnnbbu
 s=symbol, s=string, n=number, n=null, b=boolean
 b=bigint, u=undefined

 Non Primitive(reference type):
 Array, Objects, Functions
 */

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null

 let userEmail;

 const  id = Symbol('1234')
 const anotherId = Symbol('1234')
 // Symbol is unique
 console.log(id === anotherId) //false

 const bigNumber = 165486878689453918n

 // ARRAY
 const heroes = ["captain", "Iron", "spider"]

 // OBJECT
 const myObj = {
    name : "Mrityunjay",
    age : 19
 }

 const myFunction = function(){
    console.log("Hello World!")
 }
 console.log(typeof(myFunction))

 