/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */

function removeChar(str) {

    var removedHead = str.substring(1);
    let removedAlsoTail = removedHead.substring(0, removedHead.length - 1);

    return removedAlsoTail
}

let result = removeChar('this is a long strink')
console.log(result)