Object.create({})

const human = Object.create({}, {
    name: {
        value: 'Ivan',
        writable: true
    },
    id: {
        value: '12345',
        writable: false,
        configurable: false
    }
})

// console.log(human.name)

// human.name = 'Alex'

// console.log(human.name)

// delete human.name

// console.log(human.name)

const clock = Object.create({}, {
    fullTime: {
        set: function (value) {
            [this.hours, this.minutes, this.seconds] = value.split(':')
        },
        get() {
            return `${this.hours}:${this.minutes}:${this.seconds}`
        }
    }
})

clock.fullTime = '23:59:59'

console.log(clock)
console.log(clock.fullTime)
