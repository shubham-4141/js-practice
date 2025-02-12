const user = {
    username:"shubham",
    loginCount:8,
    signedIn: true,
    
    getUserDetails: function(){
        //    console.log("got User details from database")
        // console.log(`Username:${this.username}`); // this keyword use for telling work on current context
        console.log(this);
        
    }

}
// console.log(user.loginCount)
// console.log(user.getUserDetails());
// console.log(this); // here it have no value but it have many type value in brwoser


function User(username,loginCount,isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLggedin = isloggedIn;
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this 
}

// const userOne = User("shubham",12,true)
// const usertwo = User("chai aur code",11,true) // it create a copy of first user 

// remove above problem use new keyword
const userOne = new User("shubham",12,true)
const userTwo = new User("chai aur code",11,true)

console.log(userOne)
// console.log(userOne.constructor)// khud ke bare me referance hota hai 

console.log(userTwo)
// console.log(userTwo.greeting())
