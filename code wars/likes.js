function likes(names)

{



    let likeString

    for (i = 0; i < names.length; i++) {
        console.log(names)
        if (names === [] || names.length === 0 || names === [""]) {
            likeString = 'no one likes this'
        }

        if (names.length === 1) {

            likeString = `${names} ${names[0]} likes this`
        }

        if (names.length === 2) {

            likeString = `${names}-->${names[0]} and ${names[1]} like this`
        }

        if (names.length === 3) {

            likeString = `${names}-->${names[0]}, ${names[1]} and ${names[2]} like this`



        }

        if (names.length === 4) {

            likeString = `${names}-->${names[0]},${names[1]} and two others like this`



        }






    }



    let param = likeString

    console.log(names.length)

    return param

}

var result = likes([])
console.log(result)