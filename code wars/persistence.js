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
    let splitNum = num.split(``)
    console.log(splitNum)
    let multipliedNumber = 1
        //let length = multipliedNumber.toString().length

    for (i = 1; i < numberLength; i++) {

        multipliedNumber = stringedNumber[0] * stringedNumber[i + 1]
        let secondLayerMultipliedNumber = 1
        let = multipliedNumber.toString().length


        console.log(`this is the number length  ${length} from inside the for loop`)

        //as long as multipliedNumber.toString().length >1, run this code

        console.log(`this is the 1st no. multiplied by its ${i} neighbour, its the multipliedNumber variable   ${multipliedNumber}`)
        console.log(`this is the i counter  ${i}`)

        console.log(`this is the irl length of num: ${length}`)

    }
    console.log(`this is the submitted no. ${num}`)
    console.log(`this is the stringed number  ${stringedNumber}`)

}
let result = persistence(5982)
console.log(result)