
// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    console.log('DB Connected')
})
();

((name)=>{
    console.log("DB Connected", name)
}) ('vikas')


// **************JavaScript excution Context***********

// 1. Global excution context--------- this   {}---Memory creation phase and excution phase
let val1 = 10;
let val2 = 5;
function addnum(num1, num2) {
    let total = num1 + num2;
    return total;
}
let result = console.log(addnum(val1, val2));
let result2 = console.log(addnum(4,5));

   //Global Excution-----this 
   // Memory Phase---  val1 = undefined  --   val2 = undefined  -- addnum = defination  --  result = undefined  result2 = undefined
   // Excution Phase----  val1 = 10  val2 = 5  -- addnum =[ new excutional context -- memory phase-- val1=undefined val2=undefined total=undefined -- excution phase--- num1=val1=10 num2=val2=5 total=15  deleted ]----- return-- globel excution   same for result2


// callstack------------



// 2. Functional excution context------
// 3. eval excution context........



