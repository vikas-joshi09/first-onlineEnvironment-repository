// for of loop----------------

const arr = [2,4,5,6,8];

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World";
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


//Maps----------
const map = new Map(); //Unique entries
map.set('IN',"India")
map.set('USA',"America")
map.set('ENG',"England")
map.set('SA',"South Africa")
map.set('IN',"India")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key,":-", value);
}



// ***********Objects************


const myobj = {
    name : "Vikas",
    age: 24,
    role: "developer"
}

// for (const [key, value] of myobj) {
//     // console.log(key, ":-", value);
// }

const myobject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myobject) {
        //   console.log(`${key} shortcut is for:- ${myobject[key]}`)  
}


const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    //    console.log(`${key} : ${programming[key]}`);
}



// ***********************forEach()************************

const coding = ["js","ruby","node","java","python"];

// coding.forEach((item)=>{console.log(item)});

function printme(item){
    // console.log(item)
}

coding.forEach(printme);






const myCoding = [
    {langName: "javascript", langfileName: "js"},
        {langName: "java", langfileName: "java"},
    {langName: "ruby", langfileName: "rb"},
    {langName: "python", langfileName: "py"}

]

myCoding.forEach((item)=>{
    console.log(item.langName);

})