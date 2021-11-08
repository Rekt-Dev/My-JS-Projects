/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
For example:
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit
 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2      
 persistence(4) === 0 // because 4 is already a one-digit number
 */
function persistence(num) {

    let numberLength = num.toString().length;
    let stringedNumber = num.toString()
    let multipliedNumber = 1

    for (i = 0; i < numberLength - 1; i++) {

        multipliedNumber = stringedNumber[0] * stringedNumber[i + 1]


        console.log(`this is the 1st no. multiplied by its ${i} neighbour  ${multipliedNumber}`)
        console.log(`this is the i counter  ${i}`)
    }
    console.log(`this is the submitted no. ${num}`)
}
let result = persistence(53)
console.log(result)