// for of

// ["string", "string" , " string"]
// [ {object} , {object} , {object}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world !"
for (const greet of greetings) {
    // console.log( `Each char is ${greet}`); 
}

//Maps
// maps are objects
// maps have unique value collection,
// it have key value pair 
// maps can store data insertion order of the keys


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "france")
map.set('IN',"India") // it can use only uniqe data 

// console.log(map);

// for (const key of map) {
//     console.log(key);
// } // sb array ke form me a jayenge

for (const  [key,value] of map) {  // yaha hmko key value pair milta hai
    console.log(key , ":-",value);
    
}

const myObject = {
    game1:"NFS",
    game2:"Spiderman"
}
// for (const [key , value ] of myObject) {
//     console.log(key , ":-",value); // object me ye vala for of kam nhi kr rha hai
 // object itratable nhi hai uske kuch dusre tarike hai
// }

