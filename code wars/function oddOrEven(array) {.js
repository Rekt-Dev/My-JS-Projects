function oddOrEven(array) {
    let sum = 0
      for (let i=0;i<array.length;i++){
        if (i+1!=undefined){
            sum=array[i]+array[i+1]
              console.log(`this is sum - ${sum}`)
      }}
  
}


let result = oddOrEven([0,4,7,8,12,133])
console.log(result)