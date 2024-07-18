// 배열 원소 각각의 제곱의 합

let arr = [1, 2, 3, 4, 5]
let sum = 0;
let sum1 = 0;
let square = 0;

function sumOfSquare(arr) {
    let sum = 0;
    for (let num of arr) 
        sum += num ** 2
    return sum
}
console.log(sumOfSquare(arr));

for (i = 1; arr.length >= i; i++) {
    sum += arr[arr.length - i] * arr[arr.length - i]
}
console.log(sum);

function sumOfSquare(arr) {
    let sum = 0;
    for (i = 1; arr.length >= i; i++) {
        sum += arr[arr.length - i] * arr[arr.length - i]  
    }
    return sum
}
console.log(sumOfSquare(arr));

// 배열 원소의 합의 제곱

function squareOfSum(arr) {
    for (i = 1; arr.length >= i; i++) {
        square += arr[arr.length - i]
    }
    return square ** 2
}
console.log(squareOfSum(arr));

let variance = sumOfSquare(arr) / arr.length - squareOfSum(arr) / arr.length ** 2;
console.log(variance);