// Система продажи билетов 
// Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их   

const place = function() {
    var events = {};
    var bank = 0;
    var tickets = { '12345': 300 }

    function generateId() {
        var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        var generatedId = ''

        for (i = 1; i <= 5; i++) {
            generatedId += numbers[Math.floor(Math.random() * numbers.length)]
            if (generatedId.length === 5 && tickets[generatedId] != undefined) { 
                generatedId = ''
                i = 1
            }
        }
        
        return generatedId
    }

    this.buyTicket = function(name) {
        if (typeof name != 'string') {
            return console.log('Неверно указано имя')
        }

        if (events[name] != undefined) {
            bank += events[name]
            var id = generateId()
            tickets[id] = events[name]
            return console.log(`Куплен билет № ${id}`)
        } else {
            return console.log('Нет такого события')
        }
    }

    this.createEvent = function(name, price) {
        if (typeof name != 'string') {
            return console.log('Неверно указано имя')
        }
        events[name] = price
    }
    this.showEvents = function() {
        return console.log(events)
    }
    this.showSatus = function() {
        var status = { bank: bank, tickets: tickets }
        return console.log(status)
    }
    this.returnTicket = function(number) {
        if (tickets[number] != undefined) {
            bank -= tickets[number]
            delete tickets[number]
            return console.log(`Билет № ${number} возвращён`)
        } else {
            return console.log('Нет такого билета')
        }
    }
}

const myplace = new place()
myplace.createEvent('Metallica', 500)
myplace.showEvents()
myplace.buyTicket('Metallica')
myplace.showSatus()
myplace.createEvent('Led Zeppelin', 700)
myplace.buyTicket('Led Zeppelin')
myplace.showSatus()
myplace.showEvents()
myplace.buyTicket('AC/DC')
myplace.returnTicket('12345')
myplace.showSatus()
myplace.returnTicket('wrong_number')
myplace.showEvents()
