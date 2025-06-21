const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);


console.log(balance.toString()); //yaha number String me change ho jata hai iske pass aditional property bhi a jati hai 

console.log(typeof balance);
console.log(balance.toFixed(2));// it is for presition value in e-commerce website 

const otherName = 23.8966

console.log(otherName.toPrecision(2));// 24 for value 3 // 23.9 

const twoNum = 1223.34355
console.log( twoNum.toPrecision(3));// 1.22e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // coma lga value ati hai 1,000,000
console.log(hundreds.toLocaleString('en-IN')); // coma lga value ati hai indain standerd ki 10,00,000

//++++++++++++++++++ Math  ++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.3));//4
// console.log(Math.ceil(4.3));//5
// console.log(Math.floor(4.3));//4

// console.log(Math.min(2,5,3,4,5,6));
// console.log(Math.max(2,5,3,4,5,6));

console.log(Math.random());// it gives value between 0 to 1 

console.log(Math.abs(-4)); // ye absolute vala deta hai negative ka positive

console.log((Math.random()*10))
console.log((Math.random()*10) +1);  

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min)



