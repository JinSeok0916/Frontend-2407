/*
 * 3항 연산자
 */

let dice = Math.ceil(Math.random() * 6);        // 1 ~ 6 사이의 값
let result = '';
if (dice % 2 == 0)
    result = '짝수';
else
    result = '홀수';
console.log(`${dice} 은/는 ${result}입니다.`);

let evenOdd = dice % 2 == 0 ? '짝수' : '홀수';      // 조건식 ? 참일 때의 값 : 거짓일 때의 값
console.log(`${dice} 은/는 ${evenOdd}입니다.`);

let smallBig = dice <= 3 ? '작은 수' : '큰 수';
console.log(`${dice} 은/는 ${smallBig}입니다.`);

let score = Math.ceil(Math.random() * 50) + 50;
let sign = score % 10 >= 7 ? '+' : score >= 3 ? '0' : '-';
switch (parseInt(score / 10)) {
    case 10: 'A+';
    break;
    case 9: 'A' + sign;
    break;
    case 8: 'B' + sign;
    break;
    case 7: 'C' + sign;
    break;
    case 6: 'D' + sign;
    break;
    default: 'F'
}
console.log(`점수: ${score}, 학점: ${sign}`);