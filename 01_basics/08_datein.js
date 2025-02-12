// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());//Sat Jan 04 2025
// console.log(myDate.toLocaleString());//4/1/2025, 12:25:55 am
// console.log(myDate.toISOString());//2025-01-03T18:55:55.214Z
// console.log(myDate.toLocaleDateString());//4/1/2025
// console.log(myDate.toJSON());//2025-01-03T18:55:55.214Z
 

// let myCreatdDate = new Date(2025,0,4)
// console.log(myCreatdDate.toDateString());


//let myCreatdDate = new Date ("2025-01-04")
let myCreatdDate = new Date ("04-01-2025")
//console.log(myCreatdDate.toLocaleString());


let myTimestemp = Date.now()

//console.log(myTimestemp);// use for comparision
//console.log(myCreatdDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and time `);

newDate.toLocaleString('default',{
    weekday:"long",

})

console.log(newDate);




