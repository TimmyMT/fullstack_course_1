// С помощью прототипа реализовать структуру "Квадрат",
// которая будет расширять структуру "Прямоугольник",
// должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр

const rectangle = function() {
    this.calculatePerimeter = function(a, b) {
        return (a * 2) + (b * 2)
    }
}
const square = function() {
    this.calculateArea = function(a, b) {
        return a * b
    }
}

rectangle.prototype = new square()
square.prototype = new rectangle()

var newRectangle = new rectangle()
var newSquare = new square()

console.log(newRectangle.calculateArea(10, 5))
console.log(newSquare.calculatePerimeter(3, 7))
