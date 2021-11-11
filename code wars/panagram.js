/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string) {

    let strLength = string.length
    console.log(strLength)

    let aCounter = 0
    let bCounter = 0
    let cCounter = 0
    let dCounter = 0
    let eCounter = 0
    let fCounter = 0
    let gCounter = 0
    let hCounter = 0
    let iCounter = 0
    let jCounter = 0
    let kCounter = 0
    let lCounter = 0
    let mCounter = 0
    let nCounter = 0
    let oCounter = 0
    let pCounter = 0
    let qCounter = 0
    let rCounter = 0
    let sCounter = 0
    let tCounter = 0
    let uCounter = 0
    let vCounter = 0
    let wCounter = 0
    let xCounter = 0
    let yCounter = 0
    let zCounter = 0

    for (i = 1; i = strLength; i++) {
        console.log(i)
        console.log(strLength)
        if (string[i] === 'a' || string[i] === "A") {

            aCounter++
        }

        if (string[i] === 'b' || string[i] === "B") {

            bCounter++
        }

        if (string[i] === 'c' || string[i] === "C") {

            cCounter++
        }

        if (string[i] === 'd' || string[i] === "D") {

            dCounter++
        }



        if (string[i] === 'e' || string[i] === "E") {

            eCounter++
        }

        if (string[i] === 'f' || string[i] === "F") {

            fCounter++
        }
        if (string[i] === 'g' || string[i] === "G") {

            gCounter++
        }

        if (string[i] === 'h' || string[i] === "H") {

            hCounter++
        }
        if (string[i] === 'i' || string[i] === "I") {

            iCounter++
        }

        if (string[i] === 'j' || string[i] === "J") {

            jCounter++
        }
        if (string[i] === 'k' || string[i] === "K") {

            kCounter++
        }

        if (string[i] === 'l' || string[i] === "L") {

            lCounter++
        }
        if (string[i] === 'm' || string[i] === "M") {

            mCounter++
        }

        if (string[i] === 'n' || string[i] === "N") {

            nCounter++
        }
        if (string[i] === 'o' || string[i] === "O") {

            oCounter++
        }

        if (string[i] === 'p' || string[i] === "P") {

            pCounter++
        }
        if (string[i] === 'q' || string[i] === "Q") {

            qCounter++
        }

        if (string[i] === 'r' || string[i] === "R") {

            rCounter++
        }
        if (string[i] === 's' || string[i] === "S") {

            sCounter++
        }

        if (string[i] === 't' || string[i] === "T") {

            tCounter++
        }
        if (string[i] === 'u' || string[i] === "U") {

            uCounter++
        }

        if (string[i] === 'v' || string[i] === "V") {

            vCounter++
        }
        if (string[i] === 'w' || string[i] === "W") {

            wCounter++
        }

        if (string[i] === 'x' || string[i] === "X") {

            xCounter++
        }
        if (string[i] === 'y' || string[i] === "Y") {

            yCounter++
        }

        if (string[i] === 'z' || string[i] === "Z") {

            zCounter++
        }

        if (aCounter >= 1) {
            if (bCounter >= 1) {
                if (cCounter >= 1) {
                    if (dCounter >= 1) {
                        if (eCounter >= 1) {
                            if (fCounter >= 1) {
                                if (gCounter >= 1) {
                                    if (hCounter >= 1) {
                                        if (iCounter >= 1) {
                                            if (jCounter >= 1) {
                                                if (kCounter >= 1) {
                                                    if (lCounter >= 1) {
                                                        if (mCounter >= 1) {
                                                            if (nCounter >= 1) {
                                                                if (oCounter >= 1) {
                                                                    if (pCounter >= 1) {
                                                                        if (qCounter >= 1) {
                                                                            if (rCounter >= 1) {
                                                                                if (sCounter >= 1) {
                                                                                    if (tCounter >= 1) {
                                                                                        if (uCounter >= 1) {
                                                                                            if (vCounter >= 1) {
                                                                                                if (wCounter >= 1) {
                                                                                                    if (xCounter >= 1) {
                                                                                                        if (yCounter >= 1) {
                                                                                                            if (zCounter >= 1) {
                                                                                                                return true;
                                                                                                                console.log("yes its true")
                                                                                                            }

                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }


        }
        console.log(string)



    }



}

isPangram('abcdefghijklmnopqrstuvwxyz')