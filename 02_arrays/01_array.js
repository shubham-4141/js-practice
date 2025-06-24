// arrays
 
const myArr = [ 0 , 1 , 2 , 3 , 6 ,9 ]

const myHeros = ["saktiman" , "naagraaj "]

console.log(myArr[0]);


// array methods

// myArr.push(5)
// myArr.push(9) // add value in array append 
// myArr.pop() // always remove last value 


// myArr.unshift(9) // time consuming in large data  it add value in the begining of array then shift all elements by one place then it is costly operation 

// myArr.shift() // age means 0 index se remove krta hai 

console.log(myArr.includes(3)); // return data type boolean
console.log(myArr.indexOf(6)); // jo value array me nhi hogi then it return -1 index value

const newArr = myArr.join()

console.log(myArr);
console.log("type of myArr =>", typeof myArr);
console.log(newArr); // it gives same value but change its datatype  
console.log("type of newArr =>", typeof newArr); // it gives same value but change its datatype (String)


// slice and splice important for interview

const myn1 = myArr.slice(1,3)// slice connot consider last index in myn1
console.log(myn1);

console.log("original array after slice operation =>" , myArr);

const myn2 = myArr.splice(1,3) // splice cosider the upper bound index value in myn2
console.log(myn2);

console.log("original array after splice operation =>" , myArr); // portion removed in main array that consider in splice operation
  




