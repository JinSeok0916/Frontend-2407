// 중첩(nested) for 반복문

// 1. 별 다섯개를 다섯줄 그리기

for (let i = 0; i < 5; i++) {       // i는 0부터 5까지 5개
    let line = '';
    for (let k = 0; k < 4; k++)
        line += '* ';
    console.log(line);
}

// 2. 디지털 시계를 매 10분 마다 표시하기

for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute <= 59; minute++) {
        if (minute % 10 == 0)
            console.log(`${hour}:${minute}`);
    }
}

// 3. n줄에 별 n개를 다섯줄 그리기

for (let i = 0; i < 5; i++) {
    let line = '';
    for (let k = 0; k < 5; k++) {
        if (k == i + 1)     // k == i + 1 혹은 k > i
            break;
        line += '* ';
    }
    console.log(line);
}

// 3-1. n줄에 별 6-n개를 다섯줄 그리기

for (let i = 1; i <= 5; i++) {
    let line = '';
    for (let k = 6 - i; k >= 1; k--)
        line += '* ';
    console.log(line);
}

// for (let i = 5; i >= 1; i--) {
//     let line = '';
//     for (let k = 0; k < i; k++)
//         line += '* ';
//     console.log(line);
// }

// 4. 주사위 눈으로 6 X 6 배열 만들기

let diceArray = [];

for (i = 1; i <= 6; i++) {
    let line = [];
    for (k = 1; k <= 6; k++) {
        line.push(Math.ceil(Math.random() * 6))
    }
    diceArray.push(line);
}
console.log(diceArray);





// 1. 인접한 요소끼리만 바꿀 수 있는데
// 2. 바꿨을 때 바꾼 번호 중 같은 번호가 3개 이상 연속으로 인접하지 않으면 취소되며
// 3. 같은 번호가 3개 이상 연속으로 인접한 경우엔 바뀌면서 사라지고
// 4. 번호가 사라져 빈 자리는 위에 있는 요소가 내려와서 메꾸면서
// 5. 요소가 존재하지 않는 부분은 랜덤한 요소가 나온다.