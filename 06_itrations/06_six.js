// const coding = ["rb","js","java","python","cpp"]

// const values = coding.forEach((item)=>{
//         //  console.log(item);
//          return item // yaha ye foreach koi value return nhi karta
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]

const newNums = myNums.filter((num)=>{return num>4}) // if use scope {} then we must need of return 
// const newNums = myNums.filter((num)=>num>4)
// console.log(newNums);

const newnums = []

myNums.forEach((num)=>{
        if(num>4){
            newnums.push(num)
        }
})
// console.log(newnums);

const books =[
    {title:'book one',genre:'fiction',publish:1981,edition:2004},
    {title:'book two',genre:'non-fiction',publish:1981,edition:2004},
    {title:'book three',genre:'history',publish:1981,edition:2004},
    {title:'book four',genre:' non-fiction',publish:1981,edition:2004},
    {title:'book five',genre:'fiction',publish:1981,edition:2004},
    {title:'book six',genre:'fiction',publish:1981,edition:2004},
    {title:'book seven',genre:'science',publish:1981,edition:2004},
    {title:'book nine',genre:'fiction',publish:1981,edition:2004},
    {title:'book ten',genre:'science',publish:1987,edition:2014},
    
];

let userbooks = books.filter((bk)=>
 bk.genre ==="history")
// console.log(userbooks);

userbooks = books.filter((bk)=> {
     return bk.publish == 1981 && bk.genre == "fiction"
    })
console.log(userbooks);

