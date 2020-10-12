let entity = Object.create({}, {
    name: {
        value: 'Alex', writable: true, configurable: true
    },
    lastName: {
        value: 'Smith', writable: true, configurable: true
    }
})

console.log(entity.name, entity.lastName);

entity.name = 'Bob';

console.log(entity.name, entity.lastName);

delete entity.name; delete entity.lastName;

console.log(entity.name, entity.lastName);
