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

const Shipyard = function(ships) {
    if (typeof ships != 'object') {
        return 'invalid input'
    } else {
        Object.defineProperty(this, this.buildType, { writable: false })

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
                newId = generateId(ships)
                ships[newId] = ships[id]
                ships[newId].lastRepair = null
                delete ships[id]
                return ships[newId]
            }
        }
    }
}

const MotorsShipyard = function(ships) {
    this.buildType = 'motor ship'
    
    this.buildMotorShip = function(powerEngine, body) {
        if (typeof powerEngine != 'number' || typeof body != 'string') {
            return 'invalid input'
        } else {
            id = generateId(ships)
            ships[id] = {
                powerEngine: powerEngine,
                body: body,
                type: this.buildType,
                color: 'grey',
                lastRepair: null
            }
        }
        return ships[id]
    }
}

const SailsShipyard = function(ships) {
    this.buildType = 'sail ship'
    this.buildSailShip = function(postsCount, areaSails) {
        if (typeof postsCount != 'number' || typeof areaSails != 'number') {
            return 'invalid input'
        } else {
            id = generateId(ships)
            ships[id] = {
                postsCount: postsCount,
                areaSails: areaSails,
                type: this.buildType,
                color: 'brown',
                lastRepair: null
            }
            return ships[id]
        }
    }
}

let ships = {
    '12345': { postsCount: 15, areaSails: 150, type: 'sail ship', color: 'brown', lastRepair: null } ,
    '54321': { powerEngine: 500, body: 'metal', type: 'motor ship', color: 'grey', lastRepair: null }
}

MotorsShipyard.prototype = new Shipyard(ships)
SailsShipyard.prototype = new Shipyard(ships)
let newMotors = new MotorsShipyard(ships)
let newSails = new SailsShipyard(ships)

newSails.paint('12345', 'black')
newMotors.buildMotorShip(500, 'metal')
newSails.buildSailShip(15, 150)
console.log(newSails.repairShip('12345'))
newSails.repairShip('54321')
console.log(newMotors.replaceShip('54321'))
newSails.getShips()
