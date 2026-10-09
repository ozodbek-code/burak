
/*  Project Standards:
  - Logging Standards
  - Naming Standards
      function, method, variable => CAMEL Case    // goHome
      class => PASCAL.              
      folder => KEBAB
      css => SNAKE
  - Error handling
  - 


*/

/* Request
   Traditional Api
  Rest Api
  GraphQL Api

*/


/* Fronted Development
  Traditional FD ==> BSSR (Admin) => EJS
  Modern FD      ==> SPA (User's aplication) => REACT
  */

  /* Cookies:
  request join
  self destroy

  */

  /* Validation
  Fronted validation
  Backend validation
  Database validation
*/








// function getSquareNumbers(numbers: number[]) {
//   return numbers.map(number => ({
//     number: number,
//     square: number ** 2
//   }));
// }
// console.log(getSquareNumbers([4, 6, 1, 9,23]));


// function palindromCheck(str: string): boolean {
//     let arr: string[] = str.split("");

//     let left: number = 0; // boshidan check qilib keladi
//     let right: number = arr.length - 1; // oxiridan check qilib keladi

//     while (left < right) {
//         if (arr[left] !== arr[right]) {
//             return false;
//         }

//         left++;
//         right--; //  2ta tomonni markazga olb keladi
//     }

//     return true;
// };
// console.log(palindromCheck("dad"));
// console.log(palindromCheck("salom"));
// console.log(palindromCheck("level"));
// console.log(palindromCheck("radar"));
// console.log(palindromCheck("ishtiyoq"));

// function calculateSumOfNumbers(arr: any[]): number {
//     let sum = 0;
//     for (const item of arr) {
//         if (typeof item === "number") {
//             sum += item;
//         }
//     }

//     return sum;
// };
// console.log(calculateSumOfNumbers([20, "20", { son: 20 }, true, 45]));




// MIT P task


// function objectToArray(obj: any) {
//     let arr = [];
//     for (let key in obj) {
//         arr.push([key, obj[key]]);
//     }


//     return arr;
// }

// console.log(objectToArray({ a: 30, b: 18 }));
// console.log(objectToArray({ a: 4, b: 111}));
// console.log(objectToArray({ a: 20, b: 6 }));


// function hasProperty(obj: any, property: string): boolean {
//     for (let key in obj) {
//         if (key === property) {
//              return true;
//         }
//     }

// return false;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));


// function calculate(str: string): number {
//     let arr = str.split("+");

//     let num1 = Number(arr[0]);
//     let num2 = Number(arr[1]);

//     return num1 + num2;
// }

// console.log(calculate("10+3")); 
// console.log(calculate("100+20")); 
// console.log(calculate("69+39099")); 
// console.log(calculate("213233+2999")); 



// function missingNumber(arr: number[]): number {
//   for (let i = 0; i <= arr.length; i++) {
//   let found = false;

//  for (let j = 0; j < arr.length; j++) {
//  if (arr[j] === i) {
//   found = true;
//    break;
// }
//   }
// if (found === false) {
// return i;
//     }
// }

//     return -1;
// }

// console.log(missingNumber([3, 0, 1, 4, 5,])); 


// MIT T-task
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    const result = [...arr1, ...arr2];
  result.sort((a, b) => a - b);

 return result;
};

console.log(mergeSortedArrays([0, 4, 5, 30], [15, 3, 25]));