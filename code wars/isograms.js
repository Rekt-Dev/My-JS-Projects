// find the words that have no repeating letters.
// create a function that checks if a specific letter was seen twice
//assume an empty string is an isogram
//let textInput = ''

function isogram(textInput) {

    //initiate all alphabet counters
    let a = 0
    let b = 0
    let c = 0
    let d = 0
    let e = 0
    let f = 0
    let g = 0
    let h = 0
    let i = 0
    let j = 0
    let k = 0
    let l = 0
    let m = 0
    let n = 0
    let o = 0
    let p = 0
    let q = 0
    let r = 0
    let s = 0
    let t = 0
    let u = 0
    let v = 0
    let w = 0
    let x = 0
    let y = 0
    let z = 0

    //loop through the users text input in order to find dupliicates
    for (i = 0, i < textInput.length; i++;) {

        console.log(i)
        console.log(textInput.length)
        console.log(textInput)

        // if its an empty string, assume its an isogram
        if (textInput = '') {

            //   console.log("false")
            // break;

        }


        if (textInput[i] === 'a' || atextInput[i] === "A") {
            a = a++;
            if (a > 1) {

                console.log("false")


            }


        }
        if (textInput[i] === 'b' || textInput[i] === "B") {
            b = b++
                if (b > 1) {

                    console.log("false")
                }


        }

        if (textInput[i] === 'c' || textInput[i] === "C") {
            c = c++
                if (c > 1) {

                    console.log("false")
                }
        }

        if (textInput[i] === 'd' || textInput[i] === "D") {
            d = d++
                if (d > 1) {

                    console.log("false")
                }
        }


        if (textInput[i] === 'e' || textInput[i] === "E") {
            e = e++
                if (e > 1) {

                    console.log("false")
                }
        }



        if (textInput[i] === 'f' || textInput[i] === "F") {
            f = f++
                if (f > 1) {

                    console.log("false")
                }
        }


        if (textInput[i] === 'g' || textInput[i] === "G") {
            g = g++
                if (g > 1) {

                    console.log("false")
                }
        }


        if (textInput[i] === 'h' || textInput[i] === "H") {
            h = h++
                if (h > 1) {

                    console.log("false")
                }
        }

        if (textInput[i] === 'i' || textInput[i] === "I") {
            i = i++
                if (i > 1) {

                    console.log("false")
                }
        }


        if (textInput[i] === 'j' || textInput[i] === "J") {
            j = j++
                if (j > 1) {

                    console.log("false")
                }
        }

        if (textInput[i] === 'k' || textInput[i] === "K") {
            k = k++
                if (k > 1) {

                    console.log("false")
                }
        }

        if (textInput[i] === 'l' || textInput[i] === "L") {
            l = l++
                if (l > 1) {

                    console.log("false")
                }
        }


        if (textInput[i] === 'm' || textInput[i] === "M") {
            m = m++
                if (m > 1) {

                    console.log("false")
                }
        }


        if (textInput[i] === 'n' || textInput[i] === "N") {
            n = n++
                if (n > 1) {

                    console.log("false")
                }
        }


        if (textInput[i] === 'o' || textInput[i] === "O") {
            o = o++
                if (o > 1) {

                    console.log("false")
                }
        }

        if (textInput[i] === 'p' || textInput[i] === "P") {
            p = p++
                if (p > 1) {

                    console.log("false")
                }
        }

        if (textInput[i] === 'q' || textInput[i] === "Q") {
            q = q++
                if (q > 1) {

                    console.log("false")
                }
        }

        if (textInput[i] === 'r' || textInput[i] === "R") {
            r = r++
                if (r > 1) {

                    console.log("false")
                }
        }



        if (textInput[i] === 's' || textInput[i] === "S") {
            s = s++
                if (s > 1) {

                    console.log("false")
                }
        }

        if (textInput[i] === 't' || textInput[i] === "T") {
            t = t++
                if (t > 1) {

                    console.log("false")
                }
        }

        if (textInput[i] === 'u' || textInput[i] === "U") {
            u = u++
                if (u > 1) {

                    console.log("false")
                }
        }


        if (textInput[i] === 'v' || textInput[i] === "V") {
            v = v++
                if (v > 1) {

                    console.log("false")
                }
        }

        if (textInput[i] === 'w' || textInput[i] === "W") {
            w = w++
                if (w > 1) {

                    console.log("false")
                }
        }

        if (textInput[i] === 'x' || textInput[i] === "X") {
            x = x++
                if (x > 1) {

                    console.log("false")
                }
        }

        if (textInput[i] === 'y' || textInput[i] === "Y") {
            y = y++
                if (y > 1) {

                    console.log("false")
                }
        }

        if (textInput[i] === 'z' || textInput[i] === "Z") {
            z = z++
                if (z > 1) {

                    console.log("false")
                }


        }

    }

    console.log(textInput)
    console.log(textInput.length)
}



// print out a boolean value of the answer


isogram('thisisagreatword')