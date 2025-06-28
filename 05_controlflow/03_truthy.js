const usereEmail = "shubham@gmail.com"

if (usereEmail) {
    console.log("Got user Email");
}else{
    console.log("on't have user email"); 
}

// falsy values important value
// false ,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy values 
// "0",'flase',"space ho ",[],{},function(){}

// how to check empty array 

const emptyArray = []

// if (emptyArray.length === 0) {
//     console.log("Array is Empty");
// }

// how to check object is Empty 

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is Empty ");
    
}

// Nullish coalescinng operator (??): null undefined
// it is use for special cases to avoid the null cases check type sefty

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


// console.log(val1);


// Terniary Operator

// condition ? true : false/

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80 "): console.log("more than 80 ");

