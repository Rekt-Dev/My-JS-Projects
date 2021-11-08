function square(number) {


    let counter = number
    for (i = 1; i < 64; i++) {
        counter = counter * 2
        console.log(`there were ${counter} grains of wheat on chess square number ${i+1} `)
    }



}

let result = square(12)