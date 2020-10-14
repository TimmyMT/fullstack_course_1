// Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат,
// по умолчанию должны присутствовать методы add, substract

const Calc = function() {
    var valid_operations = ['+', '-', '*', '/', '%', '**']
    var regex = /^[0-9]*$/
    var operations = { '+': (a, b) => a + b, '-': (a, b) => a - b }
    var calculatedHistory = []

    this.addOperation = function(type, func) {
        if (typeof type != 'string') { return 'invalid type' }
        if (!valid_operations.includes(type)) { return 'invalid type' }

        if (operations[type] === undefined) { operations[type] = func }
    }

    function splitInput(input) {
        if (typeof input != 'string') { return 'invalid' }

        var splited = input.split(' ')

        if (splited.length != 3) { return 'invalid' }
        if (!valid_operations.includes(splited[1])) { return 'invalid' }
        if (!regex.test(splited[0]) || !regex.test(splited[2])) { return 'invalid' }

        return splited
    }

    this.operation = function(str) {
        var splited_args = splitInput(str)
        if (splited_args != 'invalid') {
            var a = parseInt(splited_args[0])
            var b = parseInt(splited_args[2])

            if (operations[splited_args[1]] === undefined) {
                return console.log('operation is not exist')
            } else {
                result = operations[splited_args[1]](a, b)
                calculatedHistory.push({ operation: splited_args[1], operands: [a, b] })
                return console.log(result)
            }
        } else { return console.log(splited_args, 'input') }
    }

    this.history = function() {
        return console.log(calculatedHistory)
    }
    this.clearHistory = function() {
        calculatedHistory = []
    }
}

const calculator = new Calc()

calculator.operation('31 + 32')
calculator.operation('10 * 2')
calculator.addOperation('/', (a, b) => a / b)
calculator.operation('10 / 2')
calculator.addOperation('*', (a, b) => a * b)
calculator.operation('10 * 2')
calculator.operation('10 - a')
calculator.history()
calculator.clearHistory()
calculator.history()
calculator.addOperation('%', (a, b) => a % b)
calculator.operation('10 % 3')
