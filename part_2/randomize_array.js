// Реализовать функцию для случайной сортировки элементов массива

function randomize(inputArray) {
    if (!Array.isArray(inputArray)) {
        return 'is not array'
    }
    let array = inputArray

    return array.sort(() => Math.random() - 0.5);
}

let myArray = [1, 2, 3, 4, 5]

console.log(randomize(myArray))
