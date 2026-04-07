// javascript default behaviour is synchronous and sigle threaded!

// excution context---- excute one line of code at a time         (1)console.log1 => (2)console.log2  each operation waits for the previous one to complete before excuting ;      call stack  memory heap;


// Blocking Code  vs  Non Blocking Code------
// blocking code => block the flow of program  => read file sync
// non blocking code => does not block the excution => read file async

// JS ENGINE --- (1)Memory Heap  (2)Call Stack   call api
// Web API----- DOM API , setTimeout, setInterval, Fetch => register call back 
// Task Queae--- callbacks add to call stack 

console.log('one');
setTimeout(function(){
    console.log('two')
},2000)
console.log('three');
