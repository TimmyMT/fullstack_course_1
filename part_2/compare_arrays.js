// Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент
// Не достаточно подробностей задачи, поэтому решил так как сам понял

function compareArrays(first, second) {
    if (!Array.isArray(first) || !Array.isArray(second)) {
        return console.log('is not array')
    } else if (first.length != second.length) {
        return console.log('arrays do not match')
    }

    let match = true

    // Solution 1
    for (i in first) {
        if (!second.includes(first[i])) {
            match = false
        }
    }

    // Solution 2
    let firstArray = first.sort()
    let secondArray = second.sort()

    for (i in firstArray) {
        if (firstArray[i] != secondArray[i]) {
            match = false
        }
    }

    if (match === true) {
        return console.log('arrays match')
    } else {
        return console.log('arrays not match')
    }
}

compareArrays(['str2', 'str1'], ['str1', 'str2'])
// arrays match
compareArrays(['str12', 'str1'], ['str1', 'str2'])
// arrays not match
