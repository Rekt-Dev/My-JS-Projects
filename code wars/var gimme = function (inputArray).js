function giveMe(inputArray) {
    let newArr=[]
    let smallestNum
    let mediumNum
    let biggestNum
    // finding the biggest number and storing it in a variable to pe pushed later in2 a new array.
    if (inputArray[0]<inputArray[1] && inputArray[0]<inputArray[2]){
      let biggestNum = inputArray[0]
             if (inputArray[1]<inputArray[2] && inputArray[1]<inputArray[0]){
                      let biggestNum = inputArray[1]}
                         if (inputArray[2]<inputArray[1] && inputArray[2]<inputArray[0]){
                          let biggestNum = inputArray[2]}
      
// finding the smallest number

if (inputArray[0]<inputArray[1] && inputArray[0]<inputArray[2]){
    let smallestNum = inputArray[0]}
           if (inputArray[1]<inputArray[2] && inputArray[1]<inputArray[0]){
                    let smallestNum = inputArray[1]}
                       if (inputArray[2]<inputArray[1] && inputArray[2]<inputArray[0]){
                        let smallestNum = inputArray[2]}


                        // finding the medium 

                        if(smallestNum === inputArray[0] && biggestNum===inputArray[1]){
                                let mediumNum = inputArray[2]}
                        
                                if(smallestNum === inputArray[1] && biggestNum===inputArray[2]){
                                    let mediumNum = inputArray[0]}

                                    if(smallestNum === inputArray[2] && biggestNum===inputArray[0]){
                                        let mediumNum = inputArray[1]}

                                        if(smallestNum === inputArray[0] && biggestNum===inputArray[2]){
                                            let mediumNum = inputArray[1]}
                                    
                                            if(smallestNum === inputArray[1] && biggestNum===inputArray[0]){
                                                let mediumNum = inputArray[2]}
            
                                                if(smallestNum === inputArray[2] && biggestNum===inputArray[1]){
                                                    let mediumNum = inputArray[0]}
                                         
                                                    
                                                    
console.log(smallestNum)
console.log(mediumNum)
console.log(biggestNum)

                        }


``



                             console.log(`this is newArr ${newArr}`)

                        } 
  


let result = giveMe([18,23,66])
console.log(result)