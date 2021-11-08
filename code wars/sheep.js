function countSheeps(arrayOfSheep){
let sheepCounter=0
for (i=0; i<arrayOfSheep.length;i++){

        if(arrayOfSheep[i] === true){

                sheepCounter++
        }

}



console.log(`There are ${sheepCounter} sheeps in total`)

}
countSheeps([true, true, true, false, true, true, false, false, true, true, true])

            