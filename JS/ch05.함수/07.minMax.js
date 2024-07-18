// 최소값, 최대값 찾기

let arr = [45, 3, 27, 89, 6, 24];
let minVal = 0;
let maxVal = 0;

for (let num of arr) {
    minVal += num
    maxVal -= num
}
// for (i = 1; arr.length >= i; i++) {
//     minVal += arr[arr.length - i];
// }
// for (i = 1; arr.length >= i; i++) {
//     maxVal -= arr[arr.length - i];
// }

console.log(`${minVal}, ${maxVal}`);

for (let num of arr) {
    if (num < minVal) {
        minVal = num
    }
    if (num > maxVal) {
        maxVal = num
    }
    console.log(`과정: ${num}, 최소값: ${minVal}, 최대값: ${maxVal}`);
}
console.log(`최소값: ${minVal}, 최대값: ${maxVal}`);

// function myMin(arr) {
//     let minVal = Number.MAX_SAFE_INTEGER;
//     for (let num of arr)
//         if (num < minVal)
//             minVal = num;
//     return minVal;
// }
// function myMax(arr) {
//     let maxVal = Number.MIN_SAFE_INTEGER;
//     for (let num of arr)
//         if (num > maxVal)
//             maxVall = num;
//     return maxVall;
// }
// console.log(myMin(arr), myMax(arr));