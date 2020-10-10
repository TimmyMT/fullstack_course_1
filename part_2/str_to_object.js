// Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой

function capitalize(inputString) {
    let capitalized = inputString.charAt(0).toUpperCase();
    let join = inputString.substring(1);
    return capitalized + join;
}

function strToObj(inputString) {
    if (typeof inputString === 'string') {
        let genObject = {
            word: inputString,
            length: inputString.length,
            isCapitalized: inputString === capitalize(inputString)
        }
        return genObject
    } else {
        return console.log('invalid input!')
    }
}

console.log(strToObj('test'))
