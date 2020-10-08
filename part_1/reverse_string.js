// Написать функцию для реверсии слова не используя встроенные методы

function reverseString(inputString) {
    var myString = inputString.toString()
    var reversed = ''

    for (i = myString.length; i === 0, i--;) {
        reversed += myString.charAt(i)
    }

    return reversed
}

// console.log(reverseString('tpircsavaj nrael'));
