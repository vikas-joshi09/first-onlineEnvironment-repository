// filter map and reduce--------


const myNums = [2,4,5,6,7,8,10,11];

// let newNums = myNums.filter((num)=> {
//    return num > 4
// });

let newNums = []
myNums.forEach((num)=>{
    if (num > 5) {
        newNums.push(num);
    }
}) 
// console.log(newNums);


// -------example of a array of object data--------------

const books = [
    {title: 'Book one', genre: 'fiction', publish: 1998, edition: 2004},
    {title: 'Book two', genre: 'non-fiction', publish: 1988, edition: 2002},
    {title: 'Book three', genre: 'history', publish: 1987, edition: 2008},
    {title: 'Book four', genre: 'polity', publish: 1991, edition: 2003},
    {title: 'Book five', genre: 'science', publish: 1978, edition: 2009},
    {title: 'Book six', genre: 'fiction', publish: 1995, edition: 2007},
];


let userBooks = books.filter((book)=>{
    return book.genre === 'fiction';
})
userBooks = books.filter((book)=>{
    return book.publish >= 1994
})
console.log(userBooks);



// ----------Map-------------------

const mynum = [2,4,5,7,8];

// const newnum = mynum.map((num)=>{
//     return num + 10;
// });

const newnum = mynum.map((num)=>num*10).map((num)=>num+1).filter((num)=> num >= 50);

console.log(newnum);




// **********************Reduce**************************

// const array1 = [1,2,3,4,5];
// const initialValue = 0;     
// const sumWithInitial = array1.reduce((accumulator, currentValue)=> accumulator + currentValue, initialValue) accumulator step by step = 0, 1, 3,6,10 + 5 = 15 answer
// console.log(sumWithInitialValue); exxpected output: 15


const array1 = [1,2,3,4,5];
const myTotal = array1.reduce((acc, currVal)=>{
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal;
}, 0);
console.log(myTotal);


const shoppingCart = [
    {course: "js course", price: 2999},
    {course: "java course", price: 4999},
    {course: "python course", price: 5999},
    {course: "react-native course", price: 3999}
]

const totalprice = shoppingCart.reduce((acc,item)=>acc + item.price,0);
console.log(totalprice)