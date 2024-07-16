// 생년월일에 따른 나이 계산

const bYear = 1991, bMonth = 12, bDay = 5;
const today = new Date();
let tYear = today.getFullYear();
let tMonth = today.getMonth() + 1;
let tDay = today.getDate();      // today.getDay >> 요일  today.getDate >> 일

// 현재월이 생월보다 작은 경우
// 현재월이 생월보다 큰 경우
// 현재월이 생월과 같은 경우 > 현쟁일과 생일을 비교

// if
if (tMonth > bMonth)
    age = tYear - bYear;
if (tMonth < bMonth)
    age = tYear - bYear - 1;
if (tMonth == bMonth) {
    if (tDay >= bDay)
        age = tYear - bYear;
    else
        age = tYear - bYear - 1;
}
if (tYear == bYear)
    age = 0;

// if-else-if
if ((tMonth - bMonth) > 0)
    age = tYear - bYear;
else if ((tMonth - bMonth) < 0)
    age = tYear - bYear - 1;
else if ((tMonth - bMonth) == 0) {
    if (tDay >= bDay)
        age = tYear - bYear;
    else
        age = tYear - bYear - 1;
}
if (tYear == bYear)
    age = 0;

// 3항연산자
let age = (tMonth - bMonth) > 0 ? tYear - bYear
        : (tMonth - bMonth) < 0 ? tYear - bYear - 1
        : tDay >= bDay ? tYear - bYear
        : tYear - bYear - 1;
if (tYear == bYear)
    age = 0;

// switch
switch (tMonth - bMonth) {
    case 
}

console.log(`${bYear}-${bMonth}-${bDay}, 나이: ${age}`);
console.log(`${tYear}-${tMonth}-${tDay}`);