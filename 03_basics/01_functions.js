function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(nums1, nums2) {
//     console.log(nums1 + nums2);
// }

function addTwoNumbers(nums1, nums2) {
    return nums1 + nums2;
}

const result = addTwoNumbers(36, 6)

// console.log(result);

function loginUserMessage(username = "har") {
    // if(username === undefined) {
    //     return ;
    // }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Harshit"));
// console.log(loginUserMessage());

function calculateCarPrice(val1,val2,...num1) {
    return num1;
}

// console.log(calculateCarPrice(200,400,500,2000));

const user = {
    username: "harshit",
    price: 156
}

function handleObject(anyobject) {
    console.log(`USername is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 1565
})

const myNewArray = [200, 300, 500, 100]

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,980,640]));