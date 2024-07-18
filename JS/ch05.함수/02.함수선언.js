/*
 * 함수 선언
 */

// 1. 선언적 함수

function add(a, b) {        // a, b - 매개변수(parameter / argument)
    return a + b;           // 반환값
}

let result = add(3, 4);
console.log(result);

console.log(add(3, 4));

console.log(`3 + 4 = ${add(3, 4)}`);

// 2. 익명(Anonymous) 함수

const anonyAdd = function(a, b) {       // let으로 써도 됨. const를 쓰는건 관성.
    return a + b;
}
console.log(`3 + 4 = ${anonyAdd(3, 4)}`);
console.log(typeof anonyAdd);       // 자료형의 종류 - 문자열, 숫자, 불, undefined, function, object

// 3. 화살표 함수, 람다(lambda) 함수

const arrowAdd = (a, b) => a + b;       // => - function의 역할, return 생략가능하게 해줌.

console.log(`3 + 4 = ${arrowAdd(3, 4)}`);
console.log(typeof arrowAdd);