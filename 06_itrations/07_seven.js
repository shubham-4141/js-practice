const myNumbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => num + 10)
// const newNums = myNumbers.map((num) => {return num + 10})

// chaininig
const newNums = myNumbers
               .map( (num)=> num * 10) // automatic retutn value
               .map((num)=> num + 1)// uper vale opreration ka result autmatic a gya is vale line
               .filter( (num)=> num >= 40)

console.log(newNums);