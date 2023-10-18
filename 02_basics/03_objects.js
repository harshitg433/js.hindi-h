// singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "harshit",
    "full name": "Harshit Gupta",
    [mySym]: "mykey1",
    age: 24,
    location : "lko",
    email: "xyz@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); //we only define it as this , not like JsUser."full name"
// console.log(JsUser[mySym]);

JsUser.email = "123@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "abcd@gmail.com"
// console.log(JsUser.email);

JsUser.greeting = function() {
    console.log("hello js user");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function() {
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
