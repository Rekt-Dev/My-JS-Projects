/*
Write a program that calculates the number of grains of wheat on a specific square of chessboard given that the number on each square is double the previous one.
There are 64 squares on a chessboard.
#Example: square(1) = 1 square(2) = 2 square(3) = 4 square(4) = 8 etc...
Write a program that shows how many grains were on each square.
*/

function countGrains(grains) {
    let counter = grains
    for (i = 1; i < 64; i++) {
        counter = counter * 2
        console.log(`there were ${counter} grains of wheat on chess square number ${i+1} `)
    }


    a
}

let result = countGrains(17)
console.log(result)