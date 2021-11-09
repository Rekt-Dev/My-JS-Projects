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

    for (ii = 0; ii < s.length; ii++) {

        console.log(ii)
        if (s[ii] > 13) {
            errorCounter++

        }
    }

    let a = 1
    let b = 2
    let c = 3
    let d = 4
    let e = 5
    let f = 6
    let g = 7
    let h = 8
    let i = 9
    let j = 10
    let k = 11
    let l = 12
    let m = 13
    let n = 14
    let o = 15
    let p = 16
    let q = 17
    let r = 18
    let ss = 19
    let t = 20
    let u = 21
    let v = 22
    let w = 23
    let x = 24
    let y = 25
    let z = 26
    let color
    let errorCounter = 0
    let stringLength = s.length
    let printerErrorString = `printer_error(s) => "${errorCounter}/${stringLength}"`


    if (color > 13) {

        errorCounter++

    }
    console.log(`printer_error(s) => "${errorCounter}/${stringLength}"`)
    console.log(s)
    console.log(`this is the stringLength var --> ${stringLength}`)
}

let result = printerError('gadfsasqwieuwqioeuqiocxzbxzncsajdhkjjajajjdhasj')