// function getSquareNumbers(numbers: number[]) {
//   return numbers.map(number => ({
//     number: number,
//     square: number ** 2
//   }));
// }
// console.log(getSquareNumbers([4, 6, 1, 9,23]));


function palindromCheck(str: string): boolean {
    let arr: string[] = str.split("");

    let left: number = 0; // boshidan check qilib keladi
    let right: number = arr.length - 1; // oxiridan check qilib keladi

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }

        left++;
        right--; //  2ta tomonni markazga olb keladi
    }

    return true;
};
console.log(palindromCheck("dad"));
console.log(palindromCheck("salom"));
console.log(palindromCheck("level"));
console.log(palindromCheck("radar"));
console.log(palindromCheck("ishtiyoq"));