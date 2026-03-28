// for loop---------
// let array = [10,33,45,24,28,65]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }


// ***********************Nested Loop**********************

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`)
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`inner loop value: ${j} and outer loop: ${i}`)
        
//     }
// }


//**************** printing table 1 to 10****************

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
// }



let arr = ["flash", "batman", "superman", "spiderman"];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}


// ***********break and continue-- for stop or continue the loop********

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        // console.log(`detected 5`);
        break
    }
    // console.log(`value of index is: ${index}`);
    
}


// ****************************whiie and do while loop***********

let i = 0;
while (i <= 10) {
    // console.log(`value of index is ${i}`);
    i = i + 2;
}

let myArr = ['batman', 'superman', 'flash',]

let j = 0
while (j < myArr.length) {
    // console.log(`value is ${myArr[j]}`);
    j++;
}


// do while loop--------

let score = 1;
do {
    console.log(`the score is: ${score}`)
    score++
} while (score <= 10);