function isItPrime() {

    const isPrime = num => {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

}


isItPrime(7)






/*function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}
*/