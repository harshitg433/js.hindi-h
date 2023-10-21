const coding = ["js", "ruby", "java", "cpp"];

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
} )

const myCoding = [
    {
        one: "abcd",
        two: "xyz"
    },
    {
        one: "abcd123",
        two: "xyz123"
    },
    {
        one: "abcd456",
        two: "xyz456"
    },
]

myCoding.forEach((item) => {
    console.log(item.one);
})