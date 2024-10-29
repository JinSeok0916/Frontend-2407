// 1. 1에서 1000사이에 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되었는가?

// let sum0 = 0;
// let sum1 = 1;

// for (let i = 1; i <= 1000; i++) {
//     let a = i + '';
//     if (a.indexOf('0') >= 0)
//         sum0++;
// }
// console.log(sum0);

// for (let i = 1; i <= 1000; i++) {
//     let a = i + '';
//     if (a.indexOf('1') >= 0)
//         sum1++;
// }
// console.log(sum1);


// // 2. C:/Workspace/Frontend/JS/ch06.객체/Q2.연습문제.js
// //    위 문자열에서 파일명 Q2.연습문제.js 만 분리하세요.

let str = 'C:/Workspace/Frontend/JS/ch06.객체/Q2.연습문제.js'
str.replace(/[^A-Za-z0-9./ ]/g, '');
let strArray = str.split('/');
console.log(strArray[strArray.length - 1]);

// 3. 두개의 세자리수를 곱해서 나온 결과가 회문일 때
//    가장 큰 회문이 몇인지 그리고 어떤 수를 곱해서 나온 결과인가?

let minVal = Number.MAX_SAFE_INTEGER;
let maxVal = Number.MIN_SAFE_INTEGER;
let maxA = 0, maxB = 0;

function isPalindrome(num) {
    return num === num.split('').reverse().join('')
}

for (let a = 100; a < 1000; a++) {
    for (let b = 100; b < 1000; b++) {
        let num = a * b;
        if (isPalindrome(String(num))) {
             if (num > maxVal) {
                maxVal = num;
                maxA = a;
                maxB = b;
            }
        }
    }
}
console.log(`최대값: ${maxA}, ${maxB}, ${maxVal}`);
    
// 4. 다음 문장에서 the 단어는 몇 번 사용되었는가?

let sample = `the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to the.`;
let cleanStr = sample.replace(/[^a-zA-z ]/g, '').toLowerCase();
console.log(cleanStr);

let count = 0;
let sampleArray = cleanStr.split(' ');
for (let word of sampleArray) {
    if (word === 'the')
        count++
}
console.log(count);
