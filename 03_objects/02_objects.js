//const tinderUser = new Object()// singleton object // output {}

const tinderUser={}  // non singleton // output {}

tinderUser.id = "123abc"
tinderUser.name = "shubham"
tinderUser.isLoggenIn =  false

// console.log(tinderUser);

const regularUser = {
    email:"shubham@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shubham",
            lastname:"rawat"
        }

    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj4 =  { 5: "e", 6:"d"}

// const obj3 = { obj1, obj2}
// console.log(obj3);

//const obj3 = Object.assign({},obj1, obj2, obj4 )// assign use target and source if we give {}

const obj3 = {...obj1,...obj2,...obj4} // most time use tish method

// console.log(obj3); 

// array of objects

const users = [
    {
        id:1,
        email:"sh@gmail.cm"
    },
    {

    },
]

users[1].email
// console.log(users)

// console.log(tinderUser);

console.log(Object.keys(tinderUser)); // retun the key in form of array for further use  // it gives datatype array

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));// iska km use hota hai ye key value pair output deta hai

console.log(tinderUser.hasOwnProperty('isLoggenIn'));


