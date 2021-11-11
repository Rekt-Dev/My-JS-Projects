/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
The string has a length greater or equal to one and contains only letters from ato z.
Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"
s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/
/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
The string has a length greater or equal to one and contains only letters from ato z.
Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"
s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

function printerError(s) {
    let letter
    let errorCounter = 0
    for (ii = 0; ii < s.length; ii++) {



        if (s[ii] === 'a') {
            letter = 1

        }

        if (s[ii] === 'b') {
            letter = 2

        }

        if (s[ii] === 'c') {
            letter = 3

        }

        if (s[ii] === 'd') {
            letter = 4

        }

        if (s[ii] === 'e') {
            letter = 5

        }

        if (s[ii] === 'f') {
            letter = 6

        }

        if (s[ii] === 'g') {
            letter = 7

        }

        if (s[ii] === 'h') {
            letter = 8

        }

        if (s[ii] === 'i') {
            letter = 9

        }

        if (s[ii] === 'j') {
            letter = 10

        }

        if (s[ii] === 'k') {
            letter = 11

        }

        if (s[ii] === 'l') {
            letter = 12

        }

        if (s[ii] === 'm') {
            letter = 13

        }

        if (s[ii] === 'n') {
            letter = 14

        }

        if (s[ii] === 'o') {
            letter = 15

        }

        if (s[ii] === 'p') {
            letter = 16

        }

        if (s[ii] === 'q') {
            letter = 17

        }

        if (s[ii] === 'r') {
            letter = 18

        }

        if (s[ii] === 's') {
            letter = 19

        }

        if (s[ii] === 't') {
            letter = 20

        }

        if (s[ii] === 'u') {
            letter = 21

        }

        if (s[ii] === 'v') {
            letter = 22

        }

        if (s[ii] === 'w') {
            letter = 23

        }

        if (s[ii] === 'x') {
            letter = 24

        }

        if (s[ii] === 'y') {
            letter = 25

        }

        if (s[ii] === 'z') {
            letter = 26

        }

        if (letter > 13) {

            errorCounter++
        }


    }

    let stringLength = s.length
    let printerErrorString = `${errorCounter}/${stringLength}`


    return printerErrorString
}


let result = printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')
console.log(result)