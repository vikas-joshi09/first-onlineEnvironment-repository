"use strict" // treat all js code as newer version;

if(true){
    let a = 30; //block scope
    const b = 20;//block scope
    var c = 22; //Globle scope
    console.log("scopped let or const:",a,b);
}

let a = 300;
const b = 200;
console.log("outer let:", a);
console.log("outer const:", b);
console.log(c);


// Nested Scopes-------------

function one() {  //child fuctions can access variable of their parent functions but parent did'nt access child's variables or data.
    const username = "Vikas";
    function two() {
        const website = "youTube";
        console.log(username);
    }
    // console.log(website);
    two()
}
one()


// *********interesting*****************

function addOne(num) {
    return num + 1;
}
addOne(5);

const addTwo = function(num){
    return num + 2;
}
addTwo(5); // if you call this function before declaration it gives error;



// this--------use for currentContext 

const user = {
    username: "Vikas",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website!`);
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// in browser globle object is window
// console.log(this);

// function chai(){
//     let username = "Vikas"
//     console.log(this);
// }
// chai();


// const chai = function () {
//     let username = "ramesh";
//     console.log(this.username);
// }
// chai();

const chai = ()=>{
    let username = "Vikas";
    console.log(this.username);
}
chai();



//Aerrow Functionns-------

// const addnum = (num1, num2)=>{
//     return num1 + num2;
// }
// console.log(addnum(2,3));

// const addnum = (num1,num2)=> num1 + num2;

// const addnum = (num1, num2)=> (num1 + num2);

const addnum = () => ({username: "Vikas"});
console.log(addnum());

const arr = [2, 5, 20, 6];
arr.forEach(()=>{})