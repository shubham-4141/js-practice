const marvel_heros = ["thor ","Ironman","spiderman"]
const dc_heros = ["superman ","flash","batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros); // it gives array in array
// console.log(marvel_heros[3][2]); // it gives array in array

// const allheros = marvel_heros.concat(dc_heros) //concat give merge two array gives single one array 
// console.log(allheros);

const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);
  
const another_array = [1, 2 , 3, 4, [3,4,2] ,5 , 2 ,[4 , [3,6,3], 5,3]]
 
const real_another_array = another_array.flat(Infinity/*yaha depth de skte hai kaha tk karna hai */)
console.log(real_another_array);

console.log(Array.isArray("shu bham"));
console.log(Array.from("shu bham"));
console.log(Array.from({name :"shu bham"}));//intresting  it is imp for interwives it gives [] impaty array because key vale pair value direct array me nhi change hogi from se 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // retrun new array 



