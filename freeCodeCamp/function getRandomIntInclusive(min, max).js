function getRandomIntInclusive(min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * 6)          //(max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


let result = getRandomIntInclusive(3,12)
console.log(result)