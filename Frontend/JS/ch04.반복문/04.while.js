// while 반복문 (랜덤하게 반복돼서 반복 횟수를 예상할 수 없을 때 사용)

let summerFruits = ['수박', '참외', '복숭아', '포도'];
let index = 0;

while (index < summerFruits.length) {
    console.log(summerFruits[index]);
    index++;        // 조건을 변화시키는 실행문이 반드시 필요함. 없으면 무한루프
}

// 주사위를 던진 합이 21을 초과할 때 loop를 탈출하고
// 그간 던진 주사위의 눈을 출력하기

let sumDice = 0;
while (sumDice <= 21) {
    let dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    sumDice += dice;
}
console.log(sumDice);

// 주사위를 던진 합이 21을 초과할 때 loop를 탈출하고
// 그간 던진 주사위의 눈으로 배열 만들기

let sumDice1 = 0;
let diceArray = [];
while (sumDice1 <= 21) {
    let dice1 = Math.ceil(Math.random() * 6);
    sumDice1 += dice1;
    diceArray.push(dice1);
}
console.log(diceArray);
console.log(sumDice1);

