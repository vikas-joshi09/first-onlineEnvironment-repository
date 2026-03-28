// if 


const isUserlogin = true;

if(isUserlogin === true){
  console.log("Hello user You are logged in.....")
}

// comparision operator--- <, >, <=, >=, ==, ===, !=, !==

const temperature = 41;

if (temperature < 50){
console.log("teamperature is less than 50")
} else{
    console.log("temperature is greater than 50")
}



const score = 200;

if (score === 200) {
    const power = "fly";
    console.log(`user power: ${power}`);
} 


const balance = 2000

if(balance < 500) {
    console.log("balance is greater than 500")
 }else if(balance < 1000){
    console.log("less than 1000");
} else {
    console.log("grether than 1000")
};



const userLoggedin = true;
const debitcard = true;
const loggedinfromGoogle = true;
const loggedinfromEmail = false;
if(userLoggedin && debitcard && loggedinfromGoogle ){
    console.log("Allow to purchase course")
}

if(loggedinfromEmail || loggedinfromGoogle){
    console.log("You are logged In")
}


// **********************Switch case statement******************

const month = 6;

switch (month) {
    case 1:
        console.log("January")
        break;
         case 2:
        console.log("February")
        break;
         case 3:
        console.log("March")
        break;
         case 4:
        console.log("April")
        break;
         case 5:
        console.log("May")
        break;

    default:
        console.log("January");
        break;
}


// truthy---------- "0", "false", " ", [], {}, function(){} 

// falsey values--------- false, 0, -0, 0n, "", null, undefined, NAN

const userEmail = "vikas@gmail.com"


const arr = [];
if(arr.length === 0){
    console.log("array is empty")
}

const obj = {}
if(Object.keys(obj).length ===0){
    console.log("object is empty");
    
}


// nullish Coalescig operator (??): null undefined;
let vall1;
vall1 = 5 ?? 10;
console.log(vall1);
vall1 = null ?? 10;
console.log(vall1);
vall1 = null ?? 10 ?? 24;

// Terniary Operators-----------
// condition ? true:false;

const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("less than 80"): console.log("more than 80");

