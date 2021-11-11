//Simple, remove the spaces from the string, then return the resultant string.



function noSpace(x) {




    let result = (x.replace(/ /g, ''));

    return result
}


let result = noSpace(`    what     is    up sire    `)

console.log(result)