let myname = 'vikas   ';
let mychannel = 'chai   ';
console.log(myname.truelength);


let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
        
    }
}

Object.prototype.vikas = function(){
    console.log(`vikas is present in all object`);
    
}