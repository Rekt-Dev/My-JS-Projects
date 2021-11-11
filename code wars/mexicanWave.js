/* 
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"] */

function wave(str) {
    let array = []
    let finalArray = []

    array.push(str[0].toUpperCase())
    console.log(array)
    for (i = 1; i < str.length; i++) {

        array.push(str[i])
        console.log(array)
    }

    // console.log(array)
    let joinedArray = array.join('')
    finalArray.push(joinedArray)
    console.log(`this is finalArray var --> ${finalArray}`)

    console.log(`this is array.join : ${joinedArray}`)
}

let result = wave("hello")
    //console.log(result)