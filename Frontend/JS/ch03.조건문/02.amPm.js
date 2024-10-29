// 현재 날짜 및 시간을 아는 방법
let today = new Date();
console.log(today);     // 2024-07-16T01:09:42.067Z, Time Zone 설정 필요 (+9시간)
let hour = today.getHours();
console.log(hour);      // 10
console.log(new Date().getHours());     // 10

if (hour < 12)
  console.log(`오전 ${hour}시 ${today.getMinutes()}분 입니다.`);
else
  console.log(`오후 ${hour - 12}시 ${today.getMinutes()}분 입니다.`);
                                // Js에서는 getMonth가 0부터 시작해서 +1 해야함
console.log(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`);
console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
