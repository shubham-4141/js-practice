const name = "shubham"
const repocount = 60

//console.log(name + repocount + "kuamr"); it is not good not use in morden days 

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('shubhamku') // give string with object properties

console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('u')); // ye craceter ke liye use kart hai


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,-4)
console.log(anotherString);

const newStringOne = "  shubham  "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace url character

const url = "https://shubham.com/shubham%20kumar"

console.log(url.replace('%20','_')); // url me kuch vlaue replac krne ke liye use karte hai

console.log(url.includes('shubham'));

const nameOne = "shubham - ram - shyam "

console.log(nameOne.split("-"));


