// Создать объект human со следующими возможностями:
// 1. При записи значения в свойство fullName имя и фамилия должны записываться в отдельные 
//    свойства firstName и lastName
// 2. При чтении значения fullName оно должно получаться из объединения firstName и lastName
// 3. При задании значения свойства dateOfBirth должно так же устанавливаться свойство age 
//    в зависимости от разницы года рождения и текущего года

let human = Object.create({}, {
    fullName: {
        set: function(value) {
            [this.firstName, this.lastName] = value.split(' ')
        },
        get() {
            return `${this.firstName} ${this.lastName}`
        }
    },
    dateOfBirth: {
        set: function(value) {
            if (typeof value != 'string') {
                return console.log('format year invalid')
            }

            splitedDate = value.split('.')
            if (splitedDate.length != 3) {
                return console.log('format year invalid')
            }
            if (splitedDate[0].length != 2 || splitedDate[1].length != 2 || splitedDate[2].length != 4) {
                return console.log('format year invalid')
            } else {
                birth = new Date(value);
                now = new Date();
                this.age = now.getFullYear() - birth.getFullYear();
            }            
        }
    }
})

human.fullName = 'John Smith'
human.dateOfBirth = '10.09.1993'

console.log(human.firstName, human.lastName)
console.log(human.age)
