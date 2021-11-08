function split(str) {



    const words = str.split('');
    const reducer = (previousValue, currentValue) => previousValue * currentValue;
    let reducedWords = words.reduce(reducer)
    let reducedWordsToStr = reducedWords.toString()
    console.log(`this is reducedWordsToStr var --> ${reducedWordsToStr}`)
    let wut = reducedWordsToStr.split('')
    console.log(`this is wut ${wut}`)
    let reducedWut = wut.reduce(reducer)


    console.log(`this is reducedWut ${reducedWut}`)

    let secondWut = reducedWut.toString()
    let secondWutWut = secondWut.reduce(reducer)
    console.log(`this is secondwutwut ${secondWutWut}`)

    let secondLevel = reducedWords.toString()
    let secondLevelArray = str.split('')
    console.log(`this is 2nd level array var -- > ${secondLevelArray}`)
    let wordsLength = words.length
    const strCopy = str.split();
    const chars = str.split(' ');
    //const words2 = reducedWords.split('');
    //console.log(words2)
    for (i = 0; i < words.length; i++) {
        console.log(`this is reducedWords var b4 --> ${reducedWords}`)

        //reducedWords=reducedWords.reduce(reducer)
        console.log(`this is reducedWords var after --> ${reducedWords}`)
        let wordsI = words[i]
        console.log(`this is wordsI var --> ${wordsI}`)
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