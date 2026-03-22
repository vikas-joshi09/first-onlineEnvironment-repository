"use strict";

/*  ********String******** */

const name = "Vikas";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('vic-zack');

console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(4, 8);
console.log(anotherString); 

const newStundent = "         Ramesh  ";
console.log(newStundent.trim());

const url = "https://vikas.com/vikas%20joshi";
console.log(url.replace('%20','-'));

const convertArray = "ram-dhari-din-kar";
console.log(convertArray.split('-'));
