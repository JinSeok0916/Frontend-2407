// 구구단


for (i = 2; i < 10; i++) {
    for (k = 1; k < 10; k++) {
        n = i * k;
        console.log(`${i} x ${k} = ${n}`);
    }
}

// 다이아몬드 그리기

let N = 4;      // 가운데 두꺼운 별이 9개

for (let i = 0; i <= N; i++) {
    let line = '';
    for (let k = 0; k < N - i; k++)
        line += ' ';
    for (let k = 0; k < 2 * i + 1; k++)
        line += '*';
    console.log(line);
}
for (let i = N - 1; i >= 0; i--) {
    let line = '';
    for (let k = 0; k < N - i; k++)
        line += ' ';
    for (let k = 0; k < 2 * i + 1; k++)
        line += '*';
    console.log(line);
}