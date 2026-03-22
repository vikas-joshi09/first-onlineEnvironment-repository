"use strict"// treat all js code as newer version;

// *************Arrays*****************
// array is a datatype where you can store multiple data;


const myArr = [1,2,3,4,5,true,"vikas"];
const newArray = new Array(3,4,5,6);
console.log(newArray)
myArr.push("manik");
myArr.pop();
myArr.unshift(9);
myArr.shift();
console.log(myArr);
console.log(myArr.includes("vikas"));
console.log(myArr.indexOf("vikas"));
const joinArray= myArr.join(); // change string into string and bind the array
console.log(joinArray);
//slice or splice--
console.log("A", myArr);
const mynArr1 = myArr.slice(1,3); // return a part of array
console.log("B", myArr);
console.log(mynArr1);

const mynArr2 = myArr.splice(1,3);
console.log("C", myArr);
console.log(mynArr2); // cut the part of array with first-last range; effecting the original array;


const marveL_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marveL_heroes.push(dc_heroes); // push in original array;
// console.log(marveL_heroes);

// let allHeros = marveL_heroes.concat(dc_heroes); // concat and return new array;
// console.log(allHeros);

const allNewHeros = [...marveL_heroes, ...dc_heroes]; //you can same concat with this spred operators;
console.log(allNewHeros);


const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const flat_another_array = another_Array.flat(Infinity);
console.log(flat_another_array);




console.log(Array.isArray("vikas"));
console.log(Array.from("vikas"));
console.log(Array.from({name:'vikas'})); //interesting

let score1 = 200;
let score2 = 300;
let score3 = 500;

console.log(Array.of(score1, score2, score3));
