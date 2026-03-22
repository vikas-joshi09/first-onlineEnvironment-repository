"use strict"//teart all js code as newest version;

const score = 400;

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 23.00352;
console.log(otherNum.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));



//   ********************Maths******************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2,4,6,3,5));
console.log(Math.max(87,36,89,85,56,33));


console.log(Math.random()); // give random values under 0-1
console.log(Math.floor(Math.random()*10)+1); // to min round of value we use floor and to avoid value 0 we use +1 and to avoid random values under 0-1 we multiplie by 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*10)+(1+min));
console.log(Math.floor(Math.random()*(max - min +1))+min);
console.log(Math.ceil(Math.random()*(max - min))+min);



