// Primitive

// 7 types : string, number, boolearn, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('159')
const anotherId = Symbol('159')

console.log(id == anotherId);

//reference (non primitive)

// Array, objects, functions 

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "harshit",
    age: 25,
}

const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof id);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (premitive), heap (non-primitive)

let myNockName = "shiva"