/* 
Выполняется проверка прав доступа пользователя к сайту при соблюдении следующих условий:
1. Возраст от 18 до 35 лет
2. Оплачена месячная подписка
3. Не действует блокировка
4. Имя пользователя не содержит внутри себя запрещенные слова
Если пользователь является администратором, для получения доступа достаточно соблюдения только первого условия 
*/

function renderAccessed() { console.log('Accessed!') }
function renderAccessDenied() { console.log('Access denied!') }

function validateObject(object) {
    if (typeof object != 'object') {
        return 'invalid'
    }

    var keys = ['age', 'paid', 'blocked', 'badUsername', 'isAdmin']

    let i = 0
    while (i <= keys.length - 1) {
        not_present = object[keys[i]] === undefined
        if (not_present === true) {
            return 'invalid'
        }
        i++
    }
}

function access(object) {
    if (validateObject(object) === 'invalid') {
        return console.log('object is invalid!')
    }

    if (object.age >= 18 && object.age <= 35) {
        if (object.isAdmin === true) {
            return renderAccessed()
        }

        if (object.paid === true && object.blocked === false && object.badUsername === false) {
            return renderAccessed()
        } else {
            return renderAccessDenied()
        }
    } else {
        return renderAccessDenied()
    }
}

function accessWithTernary(object) {
    if (validateObject(object) === 'invalid') {
        return console.log('object is invalid!')
    }

    if (object.age >= 18 && object.age <= 35) {
        object.isAdmin === true ? accessed = true : accessed = false
        if (accessed === true) {
            return renderAccessed()
        } else {
            object.paid === true && object.blocked === false && object.badUsername === false ? accessed = true : accessed = false
            if (accessed === true) {
                return renderAccessed()
            } else {
                return renderAccessDenied()
            }
        }
    } else {
        return renderAccessDenied()
    }
}

access({age: 18, paid: true, blocked: false, badUsername: false, isAdmin: true});
access({age: 18, paid: true, blocked: false, badUsername: false, isAdmin: false});
access({age: 18, paid: true, blocked: false, badUsername: true, isAdmin: false});
access({age: 18, paid: true, blocked: true, badUsername: false, isAdmin: false});
access({age: 18, paid: false, blocked: false, badUsername: false, isAdmin: false});
access({age: 17, paid: true, blocked: false, badUsername: false, isAdmin: false});
access({age: 38, paid: true, blocked: false, badUsername: false, isAdmin: false});
access({age: 38, paid: true, blocked: false, badUsername: false});
access('not object')

accessWithTernary({age: 18, paid: true, blocked: false, badUsername: false, isAdmin: true});
accessWithTernary({age: 18, paid: true, blocked: false, badUsername: false, isAdmin: false});
accessWithTernary({age: 18, paid: true, blocked: false, badUsername: true, isAdmin: false});
accessWithTernary({age: 18, paid: true, blocked: true, badUsername: false, isAdmin: false});
accessWithTernary({age: 18, paid: false, blocked: false, badUsername: false, isAdmin: false});
accessWithTernary({age: 17, paid: true, blocked: false, badUsername: false, isAdmin: false});
accessWithTernary({age: 38, paid: true, blocked: false, badUsername: false, isAdmin: false});
accessWithTernary({age: 38, paid: true, blocked: false, badUsername: false});
accessWithTernary('not object')
