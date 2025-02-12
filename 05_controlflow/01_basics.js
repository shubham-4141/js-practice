// if
const isuserloggedIn = true
const temperature = 41

// if (temperature === 56){
//     console.log("less than 50 ");
    
// } else {
//      console.log("temperature is greater than 50 ");
// }
// console.log("Executed");

//2<=2
//<,>,<=,==,=== type cheching ,!==
// const score =200

// if( score >100){
//     let power = "fly"
//     console.log(`user power : ${power}`);
    
// }
// console.log(`User power : ${power}`);   

const balance = 1000

// if(blanace > 500) console.log("text") , console.log("text 2");// eshe nhi karna 
// ;

// if(balance < 500){
//     console.log("less than  500");
// } else if ( balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLogggedIn = true
const debitcard = true
const loggedInFromGoogle = false 
const loggedInFromEmail = true

if (userLogggedIn && debitcard && 2==3 ){
    console.log("Allow to buy course ");
}
if(loggedInFromGoogle || loggedInFromEmail){ // multiple check
    console.log("Allow to login ");
}

