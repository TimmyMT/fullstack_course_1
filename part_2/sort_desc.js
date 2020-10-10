// Реализовать функцию для фильтрации массива чисел по убыванию

function byDesc(a, b) {
    if (a < b) { return 1 } else if (a > b) { return -1 } else { return 0 }
}

function sortDesc(inputNumbers) {
    if (!Array.isArray(inputNumbers)) { return 'is not array'; }
    let error = null

    inputNumbers.forEach(e => { if (typeof e != 'number') { error = 'invalid number arguments' } })

    if (error != null) { return error }
    return inputNumbers.sort(byDesc);
}

numbers = [-20, -10, 0, 10, 20, 30]
invalid_numbers = [ -1, '2', 3 ]
not_array = 'str'

console.log(sortDesc(not_array))
// is not array
console.log(sortDesc(invalid_numbers))
// invalid number arguments
console.log(sortDesc(numbers))
// [ 30, 20, 10, 0, -10, -20 ]
