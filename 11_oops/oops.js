// object literals----------------
const user = {
    username: 'vikas',
    logincount: 8,
    signIn: true,
    getUserdetails: function(){
        // console.log('got details from database!');
        console.log(`username: ${this.username}`);
        
    }
}

console.log(user.signIn);
console.log(user.getUserdetails());



// Constructor function-----------------

function User(username, loginCount, isLoggedIn){
    
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    
    return this;
}

const userOne = new User('vikas', 12, true);
const userTwo = new User('ramesh',  15, true);
console.log(userOne.constructor);




