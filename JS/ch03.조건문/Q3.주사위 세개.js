// 주사위 세개 - 백준도장 2480

let dice1 = Math.ceil(Math.random() * 6);
let dice2 = Math.ceil(Math.random() * 6);
let dice3 = Math.ceil(Math.random() * 6);
let reward = 0;

if (dice1 == dice2 && dice2 == dice3)
  reward = 10000 + dice1 * 1000;
else if (dice1 == dice2 || dice1 == dice3 || dice2 == dice3) {
  if (dice1 == dice2)
    reward = 1000 + dice1 * 100;
  if (dice2 == dice3)
    reward = 1000 + dice2 * 100;
  if (dice3 == dice1)
    reward = 1000 + dice3 * 100;
}
else {
  if (dice1 > dice2 && dice1 > dice3)
    reward = dice1 * 100;
  if (dice2 > dice3 && dice2 > dice1)
    reward = dice2 * 100;
  if (dice3 > dice1 && dice3 > dice2)
    reward = dice3 * 100;
}

/* 세 주사위가 다른 경우
  else {
    let maxDice = dice1 > dice2 ? dice1 : dice2;
    maxDice = maxDice > dice3 ? maxDice : dice3;
    reward = maxDice * 100;
  }

  혹은
  
  else {
    let maxDice = Math.max(dice1, dice2, dice3);
    reward = maxDice * 100;
  }
 */

console.log(`주사위는 각각 ${dice1}, ${dice2}, ${dice3}이며 상금은 ${reward}원 입니다.`);