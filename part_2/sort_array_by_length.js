// Реализовать функцию для фильтрации массива по длине слов

function filterByLength() {
    if (!Array.isArray(arguments[0])) {
        return 'is not array'
    }

    let numberSet = []
    for (i in arguments) {
        if (i != 0 && !isNaN(arguments[i])) {
            numberSet.push(arguments[i])
        }
    }

    filtered = []
    array = arguments[0]
    for (i in array) {
        if (numberSet.includes(array[i].length)) {
            filtered.push(array[i])
        }
    }

    return filtered
}

let fruits = ['orange', 'apple', 'banana', '']

console.log(filterByLength(fruits, 0,5))
// [ 'apple', '' ]
console.log(filterByLength(fruits, 0,6))
// [ 'orange', 'banana', '' ]
