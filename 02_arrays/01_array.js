// arrays
 
const myArr = [ 0 , 1 , 2 , 3 , 6 ,9 ]

const myHeros = ["saktiman" , "naagraaj "]

console.log(myArr[0]);


// array methods

// myArr.push(5)
// myArr.push(9)
// myArr.pop() // always remove last value 


// myArr.unshift(9) // time consuming in large data 
// myArr.shift()

console.log(myArr.includes(3));
console.log(myArr.indexOf(6));

const newArr = myArr.join()

console.log(myArr);
console.log("type of myArr =>", typeof myArr);
console.log(newArr); // it gives same value but change its datatype
console.log("type of newArr =>", typeof newArr); // it gives same value but change its datatype


// slice and splice important for interview

const myn1 = myArr.slice(1,3)// slice connot consider last index in myn1
console.log(myn1);

console.log("original array after slice operation =>" , myArr);

const myn2 = myArr.splice(1,3) // splice cosider the upper bound index value in myn2
console.log(myn2);

console.log("original array after splice operation =>" , myArr); // portion removed in main array that consider in splice operation
  




