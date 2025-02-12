// primitive // call by value
// 7 type : string ,number,  bigInt ,null, undefined,symbol

const score =100
const scoreValue = 100.3
 
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

const bigNumber =756889780976n// ye jo n hai bigint bnata hai



// non primtive // call by refrence 

// array, object,function 

const heros = ["shaktimaan","naagraj","balveer"];

let myobj = {
    name: "shubham",
    age:22,
    
}

 const myFunction = function() {
    console.log("hello world");
}
console.log( typeof symbol);
console.log( typeof bigInt);
console.log( typeof myFunction); // function return but bola jata hai object function bola jata hai 


//+++++++++++++++++++++++++++++++++++++++++++++

// stack( primtive), heap(non-primtive) 

let myYoutubename = "shubhamkumar"

let anotherName = myYoutubename

anotherName = "amrendrarawat"

console.log(anotherName); // it make change in copy of myYoutubename 
console.log(myYoutubename);// because of call by value it value dosn't change 


let userOne={
       email:"user@gmail.com",
       upi:"shubham@ybl"
}

let userTwo = userOne

userTwo.email = "amer@gmail.com"

console.log(userTwo.email);
console.log(userOne.email);






