// Выполнить преборазования с массивом сотрудниов компании

function mapSalaries(item) { return item.salary }

function averageValue(values) {
    let error = null
    if (!Array.isArray(values)) { error = 'is not array' }
    values.forEach(element => {
        if (typeof element != 'number') { error = 'invalid number arguments' }
    });

    if (error != null) { return error }
    
    let all_values = 0
    values.forEach(element => { all_values += element });
    let average = all_values / values.length

    return average;
}

function descSalary(a, b) {
    return a.salary - b.salary
}

function bySalary(value) {
    return function(item) { return item.salary > value }
}

function byAge(value) {
    return function(item) { return item.age > value }
}

let employees = [
    {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 54,
        salary: 10000,
        position: 'Architect'
    },
    {
        firstName: 'Gustav',
        lastName: 'Andersen',
        age: 31,
        salary: 5000,
        position: 'Software engineer'
    },
    {
        firstName: 'Liz',
        lastName: 'Taylor',
        age: 20,
        salary: 7000,
        position: 'Manager'
    }
]

// 1. Узнать среднюю зарплату сотрудников
let salaries = employees.map(mapSalaries)
let averageSalaries = averageValue(salaries)

console.log('Средняя зарплата сотрудников: ', averageSalaries)

// 2. Отсортировать сотрудников по зарплате
// 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет
let sortedEmployees = employees.sort(descSalary).filter(bySalary(5000)).filter(byAge(25))

console.log(sortedEmployees)
