"use strict" // treate all js code as newer version;

// functions------ 


function sayMyName() {
    console.log("Vikas")
}

sayMyName()


function addNumbers(num1, num2) { //  parameters
   return num1 + num2;
}
const result = addNumbers(2,6); // arguments
console.log(`result: ${result}`);


// ---------LogIn Message----------

function userLogInMessage(username) {
if (!username) {
        console.log("Please Enter UserName")
    } else {
       return `${username} just logged in`
    }
        
}

const message = userLogInMessage();
console.log(message)


// shopping cart 

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200,300,500,3000));


// object return--------
 const user = {
    username: "Vikas",
    price: 199
 }

 function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
 }
 handleObject(user);

// Array return-------
 const myArr = [100, 300, 500, 600];

 function returnSecondValue(getArray) {
    return getArray[1]
 }
 console.log(returnSecondValue(myArr));