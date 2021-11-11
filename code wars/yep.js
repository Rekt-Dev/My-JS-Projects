/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/


function XO(str) {
    let xCounter = 0
    let oCounter = 0
    for (i = 0; i < str.length; i++) {

        if (str[i] === 'x' || str[i] === 'X') {
            xCounter++
        }

        if (str[i] === 'o' || str[i] === 'o') {
            oCounter++
        }

    }


    if (xCounter === oCounter) {

        return true

    } else {
        return false
    }

}

let result = XO("xxrreOwroooxoxxxxoXOXXOXOOXoooooo")
console.log(result)