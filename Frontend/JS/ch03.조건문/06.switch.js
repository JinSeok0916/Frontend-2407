// 여러개 값 중에 하나를 선택
let score = Math.ceil(Math.random() * 50) + 50;     // 51 ~ 100 사이의 정수
let grade = '';
        //  /=나눈 값, %=나눈 나머지
switch(parseInt(score / 10)) {      // score 값은 5, 6, 7, 8, 9, 10
    case 10: 
        grade = 'A+'
    case 9:
        grade = 'A';
        break;                      // switch 문을 벗어나게 해줌.
    case 8:
        grade = 'B';
        break;
    case 7:
        grade = 'C';
        break;
    case 6:
        grade = 'D';
        break;
    default:
        grade = 'F';
}
console.log(`점수: ${score}, 학점: ${grade}`);

// 97:A+ , 96~93:A0 , 92~90:A-  10으로 나눈값이 9~7 / 6~3 / 2~0, paeseInt(score / 10)값이 9 8 7 6 5~0

let grade1 = '';

switch(score % 10) {
    case 9:
    case 8:
    case 7:
        grade1 = '+';
        break;
    case 6:
    case 5:
    case 4:
    case 3:
        grade1 = '0';
        break;
    default:
        grade1 = '-';
}
if (score == 100)
    grade1 = '+';
if (score < 60)
    grade1 = '';
console.log(`학점: ${grade}${grade1}`);