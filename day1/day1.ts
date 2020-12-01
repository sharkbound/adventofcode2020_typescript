import * as fs from 'fs';

const numbers = fs.readFileSync('input.txt').toString().split('\n').map(line => parseInt(line))

function part1() {
    for (let x of numbers) {
        for (let y of numbers) {
            if (x + y == 2020) {
                console.log(`day 1 part 1 answer: ${x * y}`)
                return
            }
        }
    }
}

function part2() {
    for (let x of numbers) {
        for (let y of numbers) {
            for (let z of numbers) {
                if (x + y + z == 2020) {
                    console.log(`day 1 part 2 answer: ${x * y * z}`)
                    return
                }
            }
        }
    }
}


part1()
part2()