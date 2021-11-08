/*Write a
function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" */


function repeatStr(num, str) {
    let array = []
    let string = str

    for (i = 1; i < num; i++) {

        string = string + str

    }

    console.log(string)

}
let result = repeatStr(55510, '%')