function alphabetPosition(text)

{


    let finalData = ''
    let array = [];
    let letter = '';

    for (i = 0; i < text.length; i++) {
        let letter = '';



        if (text[i] === 'a' || text[i] === "A") {
            letter = '1';
            array.push(letter);

        };

        if (text[i] === 'b' || text[i] === "B") {
            letter = '2';
            array.push(letter);
        };

        if (text[i] === 'c' || text[i] === "C") {
            letter = '3';
            array.push(letter);
        };

        if (text[i] === 'd' || text[i] === "D") {
            letter = '4';
            array.push(letter);
        };

        if (text[i] === 'e' || text[i] === "E") {
            letter = '5';
            array.push(letter);
        };

        if (text[i] === 'f' || text[i] === "F") {
            letter = '6';
            array.push(letter);
        };

        if (text[i] === 'g' || text[i] === "G") {
            letter = '7';
            array.push(letter);
        };

        if (text[i] === 'h' || text[i] === "H") {
            letter = '8';
            array.push(letter);
        };

        if (text[i] === 'i' || text[i] === "I") {
            letter = '9';
            array.push(letter);
        };

        if (text[i] === 'j' || text[i] === "J") {
            letter = '10';
            array.push(letter);
        };

        if (text[i] === 'k' || text[i] === "K") {
            letter = '11';
            array.push(letter);
        };

        if (text[i] === 'l' || text[i] === "L") {
            letter = '12';
            array.push(letter);
        };

        if (text[i] === 'm' || text[i] === "M") {
            letter = '13';
            array.push(letter);
        };

        if (text[i] === 'n' || text[i] === "N") {
            letter = '14';
            array.push(letter);
        };

        if (text[i] === 'o' || text[i] === "O") {
            letter = '15';
            array.push(letter);
        };

        if (text[i] === 'p' || text[i] === "P") {
            letter = '16';
            array.push(letter);
        };

        if (text[i] === 'q' || text[i] === "Q") {
            letter = '17';
            array.push(letter);
        };

        if (text[i] === 'r' || text[i] === "R") {
            letter = '18';
            array.push(letter);
        };

        if (text[i] === 's' || text[i] === "S") {
            letter = '19';
            array.push(letter);
        };

        if (text[i] === 't' || text[i] === 'T') {
            letter = '20';
            array.push(letter);
        };

        if (text[i] === 'u' || text[i] === 'U') {
            letter = '21';
            array.push(letter);
        };

        if (text[i] === 'v' || text[i] === "V") {
            letter = '22';
            array.push(letter);
        };

        if (text[i] === 'w' || text[i] === "W") {
            letter = '23';
            array.push(letter);
        };

        if (text[i] === 'x' || text[i] === "X") {
            letter = '24';
            array.push(letter);
        };

        if (text[i] === 'y' || text[i] === "Y") {
            letter = '25';
            array.push(letter);
        };

        if (text[i] === 'z' || text[i] === "Z") {
            letter = '26';
            array.push(letter);




        };


        let stringArray = array.toString()


        finalData = (array.join(' '))
    }
    console.log("\'" + finalData + "\'")






}





alphabetPosition("The sunset sets at twelve o' clock.");