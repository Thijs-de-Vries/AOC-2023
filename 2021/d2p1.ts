import * as fs from 'fs';

const data = fs.readFileSync('./2021/d2d.txt', 'utf-8');
const rows = data.trim().split('\n').map(row => row.split(' '));

let x = 0;
let z = 0;

for (let i = 0; i < rows.length; i++) {
    const [command, value] = rows[i];
    switch (command) {
        case 'forward':
            x += Number(value);
            //console.log(`Moving forward by ${value} units. Current position: ${x}`);
            break;
        case 'down':
            z += Number(value);
            //console.log(`Moving down by ${value} units. Current depth: ${z}`);
            break;
        case 'up':
            z -= Number(value);
            //console.log(`Moving up by ${value} units. Current depth: ${z}`);
            break;
        default:
            //console.log(`Unknown command: ${command}`);
            break;
    }
}

console.log(`Final horizontal position: ${x}, Final depth: ${z}`);
console.log(`Product of final horizontal position and depth: ${x * z}`);