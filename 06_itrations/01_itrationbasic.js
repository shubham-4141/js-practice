// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log ("5 is best number");
    }
    // console.log(element);
}
// console.log(element);

for (let i = 1; i <=10 ; i++) {
    // console.log(`outer loop value ${i}`);
    
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner loop vale ${j} and inner loop ${i}`);
        //  console.log(i + '*' + j +'=' + i*j);
         
    }
    
}
let myArray = ["flash", "batman","superman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) { // conition change hona bhut jaroori
    const element = myArray[index];
    // console.log(element);
    
}

// keywords
// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index === 5) {
//         console.log(`Detected 5`);
//         break // kisi ke control flow break karna ho to break ko use karte hai 
//     }
//     console.log(`value of index is ${index}`)
// }
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        // break //ke kuch excute nhi hoga
        continue // it can skip the condition only one time jb condition detect hogi tb after that condition runs normlay
    }
    console.log(`value of index is ${index}`)
}