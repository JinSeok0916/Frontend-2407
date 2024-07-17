/*
 *  if ()
 *  else if ()
 *  ...
 *  else
 */

// score    Math.ceil() - 소숫점 이하를 올려서 정수값을 만들어 줌.
let score = Math.ceil(Math.random() * 60) + 40;     // 41 ~ 100 사이의 정수
let grade = '';

if (score >= 90)
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >= 60)
    grade = 'D';
else
    grade = 'F';
console.log(`점수: ${score}, 학점: ${grade}`);

// FizzBuzz
// 숫자가 5로 나눠지면 Fizz, 7로 나눠지면 Buzz, 5와 7 둘 다 나눠지면 FizzBuzz
// 위의 경우가 아니면 숫자를 출력

let num = Math.ceil(Math.random() * 100)
let number = '';

if (num % 35 == 0)
    number = 'FizzBuzz';
else if (num % 7 == 0)
    number = 'Buzz';
else if (num % 5 == 0)
    number = 'Fizz';
else number = num;
console.log(`${number}`);