function f(n){
    let sum=0
 
     if (typeof n === "number" && n>0){    
    for(i=0; i<=n ; i++){
            sum = sum+i
                            }
        }
    
      else  if (typeof n !== "number" || n<=0){

            return false
        }
    
return sum
}


let answer = f(-5)
console.log(answer)