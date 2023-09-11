import * as fs from 'fs';

const data = fs.readFileSync('./2021/d1d.txt', 'utf-8');
const rows = data.trim().split('\n').map(Number);

let count = 0;
for (let i = 0; i < rows.length - 1; i++) {
    if (rows[i + 1] > rows[i]) {
        count++;
    }
}

console.log(count);