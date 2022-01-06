function alphabetPosition(text)

{
    let array = [];


    console.log(`This is the text . length  ${text.length}`);


    for (i = 0; i < text.length; i++) {
        let letter = '';


        if (text[i] === 'a'); {
            letter = '1';
            console.log(letter);
            array.unshift(letter);
            console.log(array)
            console.log(letter)


        }

        if (text[i] === 'b'); {
            letter = '2';
            console.log(` im printing this from b letter code ${letter}`)
            array.unshift(letter);
            console.log(array)
            array = array + array.unshift(letter);

        }
    }
}

alphabetPosition('aa');