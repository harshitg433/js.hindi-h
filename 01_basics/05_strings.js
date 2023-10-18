const name ="harshit"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("harshit-g")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "  harshit   "
console.log(newStringOne);
console.log(newStringOne.trim());

// console.log(gameName.replace('-','->'));

console.log(gameName.includes('z'));

// console.log(gameName.split('-'));
const newStringTwo = newString.charAt(7);
console.log(newStringTwo);
console.log(newString.concat(',',newStringOne));