
function sayMyname(){
console.log("s");
console.log("h");
console.log("u");
console.log("b");
console.log("h");
console.log("a");
console.log("m");
}

// sayMyname() // sayMyname hai refrence () ye hai excution 

// function addTwonumbers(number1,number2){
//      console.log(number1+number2);
     // yaha koi value return nhi ho raha hai
     
// }

function addTwonumbers(number1,number2/*parameter */){
    
    // let result = number1  +  number2
    // return result 
    return number1 + number2
    // return ke baad kuch bhi nhi execute hota hai
    
}
addTwonumbers(3,1)

const result = addTwonumbers(4,1)

// console.log("result: ",result);


function loginUserMassage(username){
    if(username === undefined)/*(!username)*/{
        console.log("please enter a user name ")
        return

    }
    return `${username} just logged in `
}

loginUserMassage("shubham")
// console.log(loginUserMassage("shubham"));
// console.log(loginUserMassage(""));
// console.log(loginUserMassage());// undefined just log in 

// function calculationcarprice(...num1){ //... spread oprater it return all input in arrays form
//     return num1;
// }

function calculationcardPrice(val1,val2,...num1){// return array reamining values in num1 ...num1 rest oprater
    return num1;
}

// console.log(calculationcardPrice(200,400,500,2000,300));

// objects in functions 

const user ={
     username:"shubham",
     price:1435 
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${ anyobject.price}  `);
}

// handleObject(user)
handleObject({
    username:"shubham",
    price:4563

})

// arrays in functions 

const myNewArray = [ 200, 400 ,100, 600]

function returnSecondValue(getArray){
   return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 1000,, 500, 300]));
