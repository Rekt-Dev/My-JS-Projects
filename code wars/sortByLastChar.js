/*Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
All inputs will be valid.*/




function findLastChar(str, seperator) {

    let array = []
    const space = ' '
    const comma = ','
    const period = '.'
    const tab = '\t'
    let outcome = str.split(space)
    let score = 0

    console.log(`this is str variable ${str}`)
    console.log(`this is outcome variable ${outcome}`)

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
    let s = 19
    let t = 20
    let u = 21
    let v = 22
    let w = 23
    let x = 24
    let y = 25
    let z = 26
    for (ii = 0; ii < str.length; ii++) {

        /*If you don't know in advance how many values you'll have inside the data, it's better to just keep working with the entire data array, since transforming the data can be done with array.map(), array.forEach() etc.*/

        console.log(a)
        console.log(`this is outcome[ii] ${outcome[ii]}`)
        let lastChar = outcome[ii].charAt(outcome[ii].length - 1)
        console.log(`this is the lastChar variable --> ${lastChar}`)

    }

    return outcome
}



let answer = findLastChar(`hey whats bruh breh sire up bro`)