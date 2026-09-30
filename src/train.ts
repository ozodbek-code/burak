
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

/*
   Traditional Api
  Rest Api
  GraphQL Api

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


function objectToArray(obj: any) {
    let arr = [];
    for (let key in obj) {
        arr.push([key, obj[key]]);
    }


    return arr;
}

console.log(objectToArray({ a: 30, b: 18 }));
console.log(objectToArray({ a: 4, b: 111}));
console.log(objectToArray({ a: 20, b: 6 }));