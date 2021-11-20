
function replaceValues(arrayNew,arrayCyph){ 
    let arrayCyphCounter=0

    for (iiii=0;iiii<arrayNew.length; iiii++){
            
                                if (arrayNew[iiii]>26){
console.log()
                                        arrayNew[iiii] = arrayCyph[arrayCyphCounter]
                                        console.log(arrayNew,iiii)
                                            arrayCyphCounter++



console.log(`this is arraySypchCOunter ${arrayCyphCounter}`)
                                        }


                                    }
                                    console.log(`this is arrayNew ${arrayNew}`)
                                        return arrayNew
                                
                                }


                                    let answer = replaceValues([3,39,15,28,34,37,8],[3,6,9,13])
                                    console.log(answer)