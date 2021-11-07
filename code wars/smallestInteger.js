/*Given an array of integers your solution should find the smallest integer.
For example:
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

function findSmallestInt(args) {
    console.log(`this is the args array ${args}`)
    for (i = 0; i < args.length; i++) {
        console.log(`this is I ${i}`)
        for (ii = 0; ii < args.length; ii++) {
            console.log(console.log(`this is II ${ii}`))
            if (args[ii] < args[ii + 1] && args[ii] < args[ii + 2] && args[ii] < args[ii + 3] && args[ii] < args[ii + 4]) {

                console.log(`${args[ii]} is the smallest`)


            }

        }
    }
}
const result = findSmallestInt([3, 14, 6, 9])
console.log(`this is the result = ${result}`)