const name = "Mrityunjay"
const repoCount = 50

// old method
console.log(name + repoCount + " value")

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount},`)

const gameName = new String('Mrityunjay') // object

console.log(gameName[0])
console.log(gameName.__proto__) // to see the object

// Methods
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2)) // char at index
console.log(gameName.indexOf('t')) // inddex of char

let str = "Mri-ty"
const newString = str.substring(0,3)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const str2 = "   sonu   "
console.log(str2)
console.log(str2.trim()) // trim all the spaces

const url = "https://www.google-com"
console.log(url.replace('-','.'))

console.log(url.includes('sundar')) // check if includes

const str3 = "Mri-ty-un-ja-y"
console.log(str3.split('-')) //[ 'Mri', 'ty', 'un', 'ja', 'y' ]

