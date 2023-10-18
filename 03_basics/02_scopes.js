// var c = 300
let a=300
const b = 100
if (true) {
    let a = 10
    const b = 50
    var c = 30
    console.log("Inner a: ", a);
    console.log("Inner b: ", b);
}



// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Harshit";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    two()
    // console.log(website);
}

one()

if(true) {
    const username ="harshit"
    if(username === "harshit") {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++++++++ intersesting +++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num) {
    return num + 1;
}

// c onsole.log(addTwo(2));
const  addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(2));