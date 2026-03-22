"use strict"// treat all js code as newer version;

// ************Date in JS***************

let myDate = new Date();
// console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 3, 24);
// let myCreatedDate = new Date(2026, 2, 24, 5, 33)
let myCreatedDate = new Date("01-23-2026");
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getDay())



