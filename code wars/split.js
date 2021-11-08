function split(str) {


    const words = str.split('');
    let wordsLength = words.length
    const strCopy = str.split();
    const chars = str.split(' ');
    for (i = 0; i < words.length + 1; i++) {

        let multipliedNumber = words[0] * words[1]
        console.log(`this is multipliedNumber var b4  ${multipliedNumber}`)

        multipliedNumber = multipliedNumber * words[2 * i]

        console.log(`this is multipliedNumber var after  ${multipliedNumber}`)
        console.log(`this is words[i] ${words[i]}`)
        console.log(`this is words index ${i}--> ${words[i]}`);
        console.log(`this is chars [i] var ${chars[i]}`)
        console.log(`this is the chars array ${chars}`)
        console.log(`this is words var --> ${words}`)
        console.log(`this is wordsLength var --> ${wordsLength}`)
        console.log(`this is the str copy var --> ${strCopy}`);
        console.log('this is [i] ${i}')
        console.log(`this is multipliedNumber var ${multipliedNumber}`)
        console.log(`this is multipliedNumber var after  ${multipliedNumber}`)
    }
}

let result = split('3472')
console.log(result)

let arg = 56 * 4568457
console.log(arg)