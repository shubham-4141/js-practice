  // singleton 

 
 
 //Object.create // it make singleton

 // object literals 

 // decleration of symbol 
 const mySym1 = Symbol("key1")

 const jsUser = { 
      name:"shubham",
      "full name":"shubham kumar" ,// is value ko dot se acces karne koi chance nhi hai 

      [mySym1]:"mykey1", // without square bracte it not correct use of symbol // with [] gives symbol in output 
      
      age:20,
      location:"gorakhpur",
      email:"shubham@gmail.com",
      isloggedIn:false,
      lastLoginDays:["mondey","saturday"]
 }
//  console.log(jsUser.email);// ye sahi tarika nhi hai 
//// learn these special cases of output
//  console.log(jsUser["email"]);
//  console.log(jsUser["full name"]);
//  console.log(jsUser[mySym1]);
//  console.log(typeof jsUser[mySym1]);

 jsUser.email = "amer@gmail.com"
// Object.freeze(jsUser)

 jsUser.email = "amer@112gmail.com"
 console.log(jsUser);
 
 jsUser.greeting = function(){
    console.log("hello JS user ")
 }
 jsUser.greetingTwo = function(){
    console.log(`helloJS user ${this.name}` )// string interpulation  use 
 }
 console.log(jsUser.greeting())
 console.log(jsUser.greetingTwo())


 
 



 