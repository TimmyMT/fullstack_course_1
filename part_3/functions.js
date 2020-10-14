// const print = () => {
//     // LE_print
//     // { a: 1, innerPrint: function() {...}, _parent: window }
//     const a = 1;

//     const innerPrint = () => {
//         // LE_innerPrint
//         // { _parent: LE_print }
//         console.log(a)
//     }

//     return innerPrint
// }

// const printOutput = print()

// // LE_innerPrint
// printOutput()


const dog = {
    name: 'Alex',
    age: 13
};

// const cat = {
//     name: 'bob',
//     age: 5
// };

const greet = function() {
    console.log(`Hello I'm ${this.name} and I'm ${this.age} years old`)
};

// cat.greet = greet;

// cat.greet();
// greet();

// greet.apply(cat)
// greet.call(cat)

// const bindGreet = greet.bind(cat)

// ничего не изменит так как была привязка
// bindGreet.call(dog)

const animal = function(name, age, type) {
    // this = {}

    // { name: name }
    this.name = name;
    this.age = age;
    this.type = type;

    this.greet = () => {
        console.log(`Hello I'm ${this.name} and I'm ${this.age} years old`)
    }

    // return this
}

const alex = animal('Alex', 10, 'Dog')
// console.log(alex)

const bob = new animal('bob', 10, 'cat')
// console.log(bob)

// bob.greet()

const outerGreet = bob.greet

outerGreet.call(dog)
