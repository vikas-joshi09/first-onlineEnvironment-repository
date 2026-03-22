"use strict"; // treat all js code as newer version

// alert("Hello World! This side Vikas"); we are using node js, not browser;

// let name = "vikas";
// let age = 24;
// let isLoggedIn = false;


// ------Premetive----------
//number 
//bigint
//string
//boolean
//null
//undefined
//symbol

//Non-Premetive---------
//object
//array


// "33" convert into number its convert--33
//"33abc" convert into number its convert and type is showing number but if you print variable its showing NAN 
// 1=true; 0=false;




//  *************Summary of DataTypes*************

// primitive and non-primitive

// primitive--7types-: string, number, BigInt, Boolean, null, undefined, symbol;

// non-primitive/refrence--: Arrays, Objects, Functions

// const score = 100;
// const scoreValue = 100.3;
// const isLogIn = false;
// const temprature = null;
// const bigNumber = 3245415n
// let userEmail;
// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === anotherId);

 // JavaScript Memories----------
 // Stack(Primitive), Heap(Non-Primitive);

 let myName = "Vikas Joshi"; //example of Stack Memory
 let anotherName = myName; // this is copy of myName 
 anotherName = "pultkit sharma"; // change value in copy not an original refrence
 console.log(myName, anotherName);


 let userOne = {   //example of Heap Memory---
    email : "vikas@google.com",
    role : "front-end developer"
 }
 
 let userTwo = userOne; // this is original refrence from userOne
 userTwo.email = "Raman@google.com";//change in original refrence so thats why changed both variable's values (userOne.email and userTwo.email);

 console.log(userOne.email, userTwo.email);