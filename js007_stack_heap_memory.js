/*
 Stack (Primitive), Heap (Non-Primitive)
 */
 let myName = "Mrityunjay"
 let secondName = myName
 secondName = "Maharana"
 
 // different output
 // because copy is created
 console.log(myName)
 console.log(secondName)
 
 let userOne = {
     email : "user@gmail.com",
     upi : "user@ybl"
 }
 let userTwo = userOne
 userTwo.email = "mrityunjay@gmail.com"
 
 // output will be same
 // because in non-primitive same reference is given
 console.log(userOne.email)
 console.log(userTwo.email)