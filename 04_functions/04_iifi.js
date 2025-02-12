// immediately Invoked Function Expession (IIFE)

// NAMED IIFE

(function chai(){
    console.log(`DB CONNECTED`);
    
}) ();// ; it use to stop the context of invoked fuction 
// chai()

//UNNAMED IIFE

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("SHUBHAM")

