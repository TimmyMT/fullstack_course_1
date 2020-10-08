for (i = 0; i <= 20; i++) {
    i % 2 === 0 ? console.log(i) : null
}

let i = 0;
while (i <= 20) {
    i % 2 === 0 ? console.log(i) : null
    i++
}

let i = 0;
do {
    i++
    i % 2 === 0 ? console.log(i) : null
} while (i <= 20)
