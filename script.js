//1. Write a function called logIn that takes your name as a parameter and
//console.logs 'Hello /your name/!' when it is called. (/your name/ should be your
//name written as a literal)

// const logIn = (name)=>{
//     console.log(`Hello ${name}!`)
// }
// logIn('Jessica')

// //2. Take that same function up a notch by creating a new variable called isLoggedIn,
// //and have the function measure that variable, and log 'Hello /your name/!' when the
// //variable is true, or "please log in" when it is false

// let isLoggedIn = false

// const logIn = (name)=>{
//     if (isLoggedIn === true){

//         console.log(`Hello ${name}!`)
//     } else {
//         console.log('Please log in!')
//     }
// }

// logIn('Jessica')

// //3. We are looking to re-sod our lawn. It has a length of 20' and a width of 30',
// //with Sod costing $1.45/sqft. Additionally, it will cost $100 to have thew work
// //done. Write a function that finds the area of the lawn, the price of the Sod,
// //and what the total cost will be to get the lawn redone. If our budget is $700,
// //will it be enough? Log either how much extra we will need, or how much we will
// //have left over

// const lawnRedo = (lengthOfLawn,widthOfLawn,budget)=>{
//     let area = (widthOfLawn * lengthOfLawn)
//     let sodCost = ((area)*1.45)
//     let totalCost = (sodCost + 100)
//     let lawnInformation = `Your lawn area is ${area} sqft., the sod cost will be ${sodCost} and your total cost will be ${totalCost}.`
//     if (budget === totalCost ){
//         console.log(lawnInformation + " You have just enough to re-sod your lawn")
//     } else if(budget < totalCost){
//         console.log(lawnInformation + ` You need ${totalCost - budget} more dollars to re-sod your lawn`)
//     } else if(budget > totalCost){
//         console.log(lawnInformation + ` You have ${budget - totalCost} extra dollars left over afer you re-sod your lawn`)
//     }

// }

// lawnRedo(20,30,700)

// //4. Write a function that loops over the following array of SEBR students and prints
// //out their name, and how many letters their name is

// const students = [
//     'Alice',
//     'Andy',
//     'Andrew',
//     'Casey',
//     'Damian',
//     'Emily',
//     'Emilie',
//     'Grant',
//     'Howie',
//     'Isabella',
//     'Kat',
//     'Kimbrad',
//     'Kiu',
//     'Natasha',
//     'Obi',
//     'Oscar',
//     'Pedro',
//     'Sarah',
//     'Scott',
//     'Tiffany',
//     'Umberto',
//     'Wade',
//     'Zhe'
//   ]

//   for(let i=0; i <students.length; i++){
//     console.log(`${students[i]} is ${students[i].length} letters long`)
//   }

//   //If you want to take it a bit further, add an additional condtional in that wll
//   //only return and log the names that are 5 or more letters long.
//   const students = [
//     'Alice',
//     'Andy',
//     'Andrew',
//     'Casey',
//     'Damian',
//     'Emily',
//     'Emilie',
//     'Grant',
//     'Howie',
//     'Isabella',
//     'Kat',
//     'Kimbrad',
//     'Kiu',
//     'Natasha',
//     'Obi',
//     'Oscar',
//     'Pedro',
//     'Sarah',
//     'Scott',
//     'Tiffany',
//     'Umberto',
//     'Wade',
//     'Zhe'
//   ]

//   for(let i=0; i <students.length; i++){
//     if(students[i].length >= 5){

//         console.log(students[i])
//     }
//   }

//   //Then, to take it one step further, set another conditional that makes it so
//   //only names that are 5 or more letters long and start with a vowel are logged.

//   const students = [
//     'Alice',
//     'Andy',
//     'Andrew',
//     'Casey',
//     'Damian',
//     'Emily',
//     'Emilie',
//     'Grant',
//     'Howie',
//     'Isabella',
//     'Kat',
//     'Kimbrad',
//     'Kiu',
//     'Natasha',
//     'Obi',
//     'Oscar',
//     'Pedro',
//     'Sarah',
//     'Scott',
//     'Tiffany',
//     'Umberto',
//     'Wade',
//     'Zhe'
//   ]

//   for(let i=0; i <students.length; i++){

//     if(students[i].length >= 5 && (students[i][0] === "A" || students[i][0] === "E" || students[i][0] === "I" || students[i][0] === "O" || students[i][0] === "U"))
//         console.log(students[i])
//     }

//Higher Order Functions

const nums = [1, 3, 6, 9, 11, 15, 21, 25, 28, 30, 32, 34, 36, 40, 44, 45];

//1. const getSquares = (nums) => { /**

//use .map to return an array of all nums multiplied by 2 */ }

// const getSquares = nums.map((x)=> x * 2);
//  console.log(getSquares)

//2. const isDivBy3 = (nums) => { /**

//Use .map to return an array of booleans, if the number is divisible by 3 return true otherwise false
//The modulus % operator may be useful * */ }

// const divisibleByThree = nums.map((x) =>
//     { if (x % 3 === 0){
//         return true
//     } else return false
// }
// )
// console.log(divisibleByThree)

//const filterOdds = (nums) => { /**

//Use .filter to return an array of all odd numbers
//The modulus % operator may be useful * */ }

// const filterOdds = nums.filter((x) => {
//   if (x % 2 !== 0) {
//     return true;
//   }
// });
// console.log(filterOdds);

// //another way to write it
// const filterOdd = (nums) => {
//   return nums.filter((x) => {
//     if (x % 2 !== 0) {
//       return true;
//     }
//   });
// };
// console.log(filterOdd(nums));

//4. const filterEvens = (nums) => { /**

//Use .filter to return all even numbers
//The modulus % operator may be useful * */ }

// const filterEven = (nums)=>{
//     return nums.filter((x)=>{
//         if(x % 2 === 0) {
//             return true;
//         }
//     });
// };
// console.log(filterEven(nums))

//5. const filterDivBy4 = (nums) => { /**

// Use .filter to return all numbers that are divisible by 4
//The modulus % operator may be useful * */

const filterDivBy4 = (nums) => {
  return nums.filter((x) => {
    if (x % 4 === 0) {
      return true;
    }
  });
};
console.log(filterDivBy4(nums));

// 6.const addAllUp = (nums) => { /**

//Use .reduce to return the total sum of all numbers */ }


const addAllUp = nums.reduce((acc, x) => {
  return (acc += x);
}, 0);
console.log(addAllUp);

// 7.const multiplyAllNums = (nums) => { /**

    //Use .reduce to return the total product of all numbers */ }

const multiplyAllNums = nums.reduce((acc, x)=>{
    return (acc *= x);
}, 1);
console.log(multiplyAllNums)




 const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]

 
const sumSquareAllNums = newNums.reduce((acc, x)=>{
    return (acc += (x*x));
}, 0);
console.log(sumSquareAllNums)