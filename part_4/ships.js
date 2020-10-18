// Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей 

function generateId(ships) {
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    var generatedId = ''

    for (i = 1; i <= 5; i++) {
        generatedId += numbers[Math.floor(Math.random() * numbers.length)]
        if (generatedId.length === 5 && ships[generatedId] != undefined) { 
            generatedId = ''
            i = 1
        }
    }
    return generatedId
}

class Shipyard {
    constructor() {
        if (typeof ships != 'object') {
            return 'invalid input'
        } else {
            this.getShips = function() {
                return console.log(ships)
            }
            this.paint = function(id, color) {
                if (ships[id] != undefined) {
                    ships[id].color = color
                    return ships[id]
                } else {
                    return 'ship is not exist'
                }
            }
            this.repairShip = function(id) {
                if (ships[id].type === this.buildType && ships[id] != undefined) {
                    ships[id].lastRepair = new Date().toLocaleString()
                    return ships[id]
                }
            }
            this.replaceShip = function(id) {
                if (ships[id].type === this.buildType && ships[id] != undefined) {
                    let newId = generateId(ships)
                    ships[newId] = ships[id]
                    ships[newId].lastRepair = null
                    delete ships[id]
                    return ships[newId]
                }
            }
        }
    }
}

class MotorShip {
    constructor(powerEngine, body) {
        this.powerEngine = powerEngine
        this.body = body
        this.type = 'motor ship'
        this.color = 'grey'
        this.lastRepair = null
    }
}

class SailShip {
    constructor(postsCount, areaSails) {
        this.postsCount = postsCount
        this.areaSails = areaSails
        this.type = 'sail ship'
        this.color = 'brown'
        this.lastRepair = null
    }
}

class MotorsShipyard extends Shipyard {
    constructor(ships) {
        super();
        this.buildType = 'motor ship'

        this.buildMotorShip = function(powerEngine, body) {
            if (typeof powerEngine != 'number' || typeof body != 'string') {
                return 'invalid input'
            } else {
                let id = generateId(ships)
                ships[id] = new MotorShip(powerEngine, body)
                return ships[id]
            }
        }    
    }
}

class SailsShipyard extends Shipyard {
    constructor(ships) {
        super();
        this.buildType = 'sail ship'

        this.buildSailShip = function(postsCount, areaSails) {
            if (typeof postsCount != 'number' || typeof areaSails != 'number') {
                return 'invalid input'
            } else {
                let id = generateId(ships)
                ships[id] = new SailShip(postsCount, areaSails)
                return ships[id]
            }
        }
    }
}

let ships = {
    '12345': new SailShip(15, 150),
    '54321': new MotorShip(500, 'metal')
}

let newMotors = new MotorsShipyard(ships)
let newSails = new SailsShipyard(ships)

newSails.paint('12345', 'black')
newMotors.buildMotorShip(500, 'metal')
newSails.buildSailShip(15, 150)
newSails.repairShip('12345')
newMotors.replaceShip('54321')
newSails.getShips()
