//Simple, remove the spaces from the string, then return the resultant string.



function noSpace(x) {

    x.replace(/ /g, '')

    console.log(x)
}


let result = noSpace(`    what     is    up sire    `)

console.log(result)