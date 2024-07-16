// 사분면 고르기 - 백준도장 14681

let x = Math.ceil(Math.random() * 1000);
let y = Math.ceil(Math.random() * 1000);
let Quadrant= '';

x *= x > 500 ? 1 : -1;
y *= y > 500 ? 1 : -1;

if (x > 0 && y > 0)
    Quadrant = '1사분면';
if (x < 0 && y > 0)
    Quadrant = '2사분면';
if (x < 0 && y < 0)
    Quadrant = '3사분면';
if (x > 0 && y < 0)
    Quadrant = '4사분면';

console.log(`x의 값은 ${x}, y의 값은 ${y}이므로 ${Quadrant}이다.`);
