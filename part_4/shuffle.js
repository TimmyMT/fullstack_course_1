// Модифицировать прототип Array, добавив в него метод shuffle,
// чтобы получить возможность выполнять случайную сортировку для любого массива

Array.prototype.shuffle = function() {
    return this.sort(() => Math.random() - 0.5)
}

const simpleArray = [1, 2, 3, 4]

console.log(simpleArray.shuffle())

