function plog(input) {
    console.log(input)
}

// let myArr = ['1', 'kek', '2', 'kek', '3']

// for (key in myArr) {
//     console.log(myArr[key])
// }

const employers = [
    { salary: '123.45', firstName: 'Arin', lastName: 'Kar', email: 'test1@mail.com', gender: 'Male',
        officeIp: '3.3.100.54', age: 30 },
    { salary: '124.46', firstName: 'BoyArin', lastName: 'Karbon', email: 'test2@mail.com', gender: 'Female',
        officeIp: '3.3.100.55', age: 31 },
    { salary: '125.47', firstName: 'TugaArin', lastName: 'Kartal', email: 'test3@mail.com', gender: 'Male',
        officeIp: '3.3.100.56', age: 32 },
    { salary: '126.48', firstName: 'ArinTier', lastName: 'Karkarov', email: 'test4@mail.com', gender: 'Female',
        officeIp: '3.3.100.57', age: 33 },
    { salary: '7000.49', firstName: 'ArinHuyarin', lastName: 'Karabin', email: 'test5@mail.com', gender: 'Male',
        officeIp: '3.3.100.58', age: 34 }
]

const forEachCallback = function(item) {
    console.log('Emploer name: ', item.firstName, item.lastName)
};

// employers.forEach(forEachCallback);

// for (let i = 0; i < employers.length; i++) {
//     console.log('Emploer name: ', employers[i].firstName, employers[i].lastName)
// }

// const mapCallback = function(item) {
//     return item.firstName + ' ' + item.lastName
// };

// const namesList = employers.map(mapCallback);

// const lastNamesList = namesList.map(function (item){
//     return item.split(' ')[1]
// })

// console.log(lastNamesList);

// const reduceCallback = function(acc, item) {
//     return acc + Number(item.salary);
// };

// const overallSalary = employers.reduce(reduceCallback, 0)

// console.log(overallSalary)

// const sortCallback = function (a, b) {
//     if (a.age < b.age) {
//         return 1
//     } else if (a.age > b.age) {
//         return -1
//     } else {
//         return 0
//     }
// };

// const sortCallback = function (a, b) {
//     return b.age - a.age
// };

// const sortedByAge = employers.sort(sortCallback);

// console.log(sortedByAge)

// some - некоторые отвечают требованию (true/false)
// const someCallback = function(item) {
//     return Number(item.salary) > 10000;
// }

// const salaryCheckResult = employers.some(someCallback)

// console.log(salaryCheckResult)

// every - все должны отвечать требвоанию (true/false)
// const everyCallback = function(item) {
//     return Number(item.salary) > 100;
// }

// const salaryCheckResult = employers.every(everyCallback)

// console.log(salaryCheckResult)

// includes - содержит ли искомый элемент
// const firstNameList = employers.map(function(item) {
//     return item.firstName
// })

// const checkResult = firstNameList.includes('Arin');

// plog(checkResult)

function filterCallback(item) {
    return item.age > 32
}

filterList = employers.filter(filterCallback)
// find вернёт только первый найденный
// filterList = employers.find(filterCallback)

plog(filterList)

// function ageFilter(item) {
//     return item.age > 32;
// };

// function getSalary(acc, item) {
//     return acc + Number(item.salary);
// };

// let overallSeniorsSalary = employers.filter(ageFilter).reduce(getSalary, 0)

// plog(overallSeniorsSalary)

// let overallSalary = 0;

// for (n in employers) {
//     if (employers[n].age > 32) {
//         overallSalary += Number(employers[n].salary)
//     }
// }

// plog(overallSalary)
