const coding = ["rb","js","java","python","cpp"]

// coding.forEach( function(item){// callback fn ka nam nhi hota hai 
//     console.log(item);
// })

// arow function
// coding.forEach((item)=>{
    // console.log(item);  
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // ager function bna rkkha hai phle se to uska refrance bhi de skte hai 

// coding.forEach((item ,index , arr) => {
//     console.log(item,index,arr); 
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileNmae: "js"
    },
    {
        languageName: "java",
        languageFileNmae: "java"
    },
    {
        languageName: "python",
        languageFileNmae: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})