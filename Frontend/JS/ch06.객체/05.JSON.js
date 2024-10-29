// JSON - JavaScript Object Notation
// 이기종 컴퓨터간에 데이터를 주고 받는 표준 - XML(eXtensible Markup Language)
// 실제로는 JSON이 업계표준(de facto standard)

let name = 'James', age = 27, job = '프로그래머';
let person = {name: name, age: age, job: job};
let newPerson = {name, age, job};                   // key 이름과 변수명이 같으면 하나만 쓸 수 있음.
console.log(person, newPerson);

let externalForm = JSON.stringify(person);
console.log(externalForm);

let internalForm = JSON.parse(externalForm);
console.log(internalForm);

let personArray = [person, {name: 'Maria', age: 25, job: '디자이너'}];
console.log(JSON.stringify(personArray));

// sort() 정렬

personArray.sort((a, b) => a.age - b.age);      // age의 오름차순 정렬
personArray.sort((a, b) => b.age - a.age);      // age의 내림차순 정렬