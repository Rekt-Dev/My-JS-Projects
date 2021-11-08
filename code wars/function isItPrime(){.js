function isItPrime(num) {
    for (var i = 2; i < num; i++)
        console.log(i)
    if (num % i === 0) return false;
    return num > 1;
}

let result = isItPrime(8)
console.log(result)





/*function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}
*/