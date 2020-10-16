// Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам

const Human = function(person) {
    this.getPersonData = function() {
        var personData = {
            name: person.name,
            lastName: person.lastName,
            location: person.location,
            phoneNumber: person.phoneNumber
        }
        return personData
    }
    this.eat = function() {
        return console.log(person.name, person.eat())
    }
    this.sleep = function() {
        return console.log(person.name, person.sleep())
    }
    this.callFriend = function() {
        return console.log(person.name, person.callFriend())
    }
}

const Employee = function(person) {
    this.getEmployeeData = function() {
        var employeeData = {
            position: person.position,
            startDate: person.startDate,
            endDate: person.endDate,
            baseSalary: person.baseSalary,
            salaryCurrency: person.salaryCurrency,
            department: person.department
        }
        return employeeData
    }
}

const CurrentEmployee = function(person) {
    this.writeReport = function() {
        return console.log(person.name, person.writeReport())
    },
    this.organizeMeeting = function () {
        return console.log(person.name, person.organizeMeeting())
    },
    this.startVacation = function() {
        return console.log(person.name, person.startVacation())
    }
}

const RetiredEmployee = function(person) {
    this.retire = function() {
        return console.log(person.name, person.retire())
    }
}

const john = {
    name: "John",
    lastName: "Smith",
    position: "Senior engineer",
    startDate: "10.10.1990",
    endDate: "10.10.2000",
    baseSalary: "10000",
    salaryCurrency: "$",
    location: "Russia",
    department: "IT",
    phoneNumber: "+1234567890",
    eat: function() { return 'eat' },
    sleep: function() { return 'sleep' },
    callFriend: function() { return 'call friend' },
    writeReport: function() { return 'write report' },
    organizeMeeting: function () { return 'organize meet' },
    retire: function () { return 'is retired' },
    startVacation: function () { return 'start vacation' }
}

Employee.prototype = new Human(john)
CurrentEmployee.prototype = new Employee(john)
RetiredEmployee.prototype = new Employee(john)

var myEmployee = new CurrentEmployee(john)
console.log(myEmployee.getPersonData())
myEmployee.eat()
myEmployee.organizeMeeting()
var nowRetiredEmployee = new RetiredEmployee(john)
console.log(nowRetiredEmployee.getEmployeeData())
nowRetiredEmployee.callFriend()
nowRetiredEmployee.retire()
