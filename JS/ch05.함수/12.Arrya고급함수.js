// 배열에 대한 고급 함수

// forEach - 각각의 index에 대한 작업

let fruits = '수박,참외,복숭아,포도'.split(',');

for (let fruit of fruits) {
    console.log(fruit);
}

console.log(fruits);

fruits.forEach((fruit, index) => {
    console.log(`인덱스: ${index}, 아이템:${fruit}`);
});

let numbers = [11, 23, 56, 72, 83];                 // map함수가 자주쓰임.
numbers.map((num) => {
    console.log(`${num}, ${num * num}`);
});

// 과일의 글자수가 3인 과일만 선택

let newFruits = fruits.filter((fruit) => fruit.length == 3);

console.log(newFruits);