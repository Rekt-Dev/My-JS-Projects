function repeatStr(n, s) {




    let array = []
    let string = s

    for (i = 1; i < n; i++) {

        string = string + s

    }

    console.log(string)
    return string

}


repeatStr(4,'bro')