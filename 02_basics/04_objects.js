// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "135sda"
tinderUser.name = "xyz"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUSer = {
    email: "xyz@gmail.com",
    fullname: {
        userfullname: {
            firstName: "harshit",
            lastNAme: "gupta"
        }
    }
}

// console.log(regularUSer.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 7: "b"}
const obj5 = {6: "a", 8: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4,obj5)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users =[
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },{
        id: 4,
        email: "d@gmail.com"
    }
]

// console.log(users[1].id)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));