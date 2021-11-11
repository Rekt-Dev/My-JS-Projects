/* Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid. */

function high(x) {

    let array = x.split(' ')
    let wordCounter = 0
    let letter = 0


    for (i = 0; i < array.length; i++) {
        letter = 0

        console.log(`this is array length  ${array.length}`)

        for (ii = 0; ii < array[i][ii].length; ii++) {
            console.log(`this is char at [i][ii]----> ${x.charAt([i][ii])}`)

            console.log(`this is char at [i]----> ${x.charAt(i)}`)
            console.log(`these r the counters i and ii : ${i} ${ii}`)
            console.log(`this is array i ii length : ${array[i][ii].length}`)

            let word = array[i][ii]
            console.log(`this is word var: -->${word}`)

            letter = 0
            if (array[i][ii] === 'a' || array[i][ii] === "A") {
                letter = 1;


            };

            if (array[i][ii] === 'b' || array[i][ii] === "B") {
                letter = 2;

            };

            if (array[i][ii] === 'c' || array[i][ii] === "C") {
                letter = 3;

            };

            if (array[i][ii] === 'd' || array[i][ii] === "D") {
                letter = 4;

            };

            if (array[i][ii] === 'e' || array[i][ii] === "E") {
                letter = 5;

            };

            if (array[i][ii] === 'f' || array[i][ii] === "F") {
                letter = 6;

            };

            if (array[i][ii] === 'g' || array[i][ii] === "G") {
                letter = 7;

            };

            if (array[i][ii] === 'h' || array[i][ii] === "H") {
                letter = 8;

            };

            if (array[i][ii] === 'i' || array[i][ii] === "I") {
                letter = 9;

            };

            if (array[i][ii] === 'j' || array[i][ii] === "J") {
                letter = 10;

            };

            if (array[i][ii] === 'k' || array[i][ii] === "K") {
                letter = 11;

            };

            if (array[i][ii] === 'l' || array[i][ii] === "L") {
                letter = 12;

            };

            if (array[i][ii] === 'm' || array[i][ii] === "M") {
                letter = 13;

            };

            if (array[i][ii] === 'n' || array[i][ii] === "N") {
                letter = 14;

            };

            if (array[i][ii] === 'o' || array[i][ii] === "O") {
                letter = 15;

            };

            if (array[i][ii] === 'p' || array[i][ii] === "P") {
                letter = 16;

            };

            if (array[i][ii] === 'q' || array[i][ii] === "Q") {
                letter = 17;

            };

            if (array[i][ii] === 'r' || array[i][ii] === "R") {
                letter = 18;

            };

            if (array[i][ii] === 's' || array[i][ii] === "S") {
                letter = 19;

            };

            if (array[i][ii] === 't' || array[i][ii] === 'T') {
                letter = 20;

            };

            if (array[i][ii] === 'u' || array[i][ii] === 'U') {
                letter = 21;

            };

            if (array[i][ii] === 'v' || array[i][ii] === "V") {
                letter = 22;

            };

            if (array[i][ii] === 'w' || array[i][ii] === "W") {
                letter = 23;

            };

            if (array[i][ii] === 'x' || array[i][ii] === "X") {
                letter = 24;

            };

            if (array[i][ii] === 'y' || array[i][ii] === "Y") {
                letter = 25;

            };

            if (array[i][ii] === 'z' || array[i][ii] === "Z") {
                letter = 26;


            }

            wordCounter = wordCounter + letter
            console.log(letter)
            console.log(`this is word counter ${wordCounter}`)
        }
        console.log(array)

    }
}

let result = high(`what is up you motherfucker years aye`)
console.log(result)