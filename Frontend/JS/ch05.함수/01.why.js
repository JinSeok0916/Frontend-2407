// 소수(prime number) 판별

let num = 13;

// for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//         console.log(`${num}은/는 소수가 아닙니다.`);
//         break;
//     }
// }

function isPrimeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}
console.log(12, isPrimeNumber(12));
console.log(13, isPrimeNumber(13));

// 2에서부터 100까지의 소수 찾기

let primeNumbers = [];

for (let i = 2; i <= 100; i++) {
    if (isPrimeNumber(i))
        primeNumbers.push(i);
}
console.log(primeNumbers);