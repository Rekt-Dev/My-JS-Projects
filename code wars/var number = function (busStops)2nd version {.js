var number = function (busStops) {
    let x = 0;
    busStops.forEach(a => x = x + a[0] - a[1]);
    return x
}

 let result = number([[8,4],[5,9],[12,45]])
console.log(result)