"use strict" // treat all js code as newer version

//singleton  -- object.create

//object leterals--------


const mySym = Symbol("key1");

const jsUser = {
    name: "Vikas",
    "Full Name": "Vikas Joshi",
    age: 24,
    [mySym] : "mykey1",
    role: "React Developer",
    location: "Delhi",
    email: "vikassjjoshi09@gmail.com",
    isloggedIn: true,
    lastLogInDays: ["Monday","Satuarday"]
}

console.log(jsUser.name);
console.log(jsUser.email);
console.log(jsUser["Full Name"]);
console.log(typeof jsUser[mySym]);


jsUser.email = "vikas@gmail.com";
console.log(jsUser.email);

// // Object.freeze(jsUser);
// jsUser.email = "vikas@microsoft.com";
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greetingTwo());



// sigleton--------------

// const tinderUser = new Object();

const tinderUser = {}

tinderUser.name = "Sammy";
tinderUser.id = "123ABC";
tinderUser.islogIn = false;
console.log(tinderUser);

// object assign----
const obj1 = {name: "Vikas", age: 24,}
const obj2 = {role: "React Developer"}
const obj3 = {location: "Delhi", company: "HCL"}

// const assignObj = Object.assign({}, obj1, obj2, obj3);
const assignObj = {...obj1,...obj2,...obj3}
console.log(assignObj);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('islogIn'));