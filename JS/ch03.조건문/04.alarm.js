// 백준도장 - 문제번호 2884

let alarmHour = Math.ceil(Math.random() * 24)
let alarmMin = Math.ceil(Math.random() * 60)
let newHour = 0, newMin = 0;

// 알람 설정 분이 45보다 크거나 같으면 alarmMin - 45, 45보다 작으면 alarmHour-1 alarmMin+15

if (alarmMin < 45) {
    if (alarmHour < 1) {
        newHour = alarmHour + 23, newMin = alarmMin + 15
    } else {
        newHour = alarmHour - 1, newMin = alarmMin + 15
    }
} else {
    newHour = alarmHour, newMin = alarmMin - 45
}

console.log(`기존의 설정한 알람 시간은 ${alarmHour}시 ${alarmMin}분 입니다.`);
console.log(`새롭게 설정한 알람 시간은 ${newHour}시 ${newMin}분 입니다.`);