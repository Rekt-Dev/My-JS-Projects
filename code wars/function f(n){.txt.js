function f(n){
    let sum=0
 
     if (typeof n === "number" && n>0 && Number.isInteger(n) )  
{    
    for(i=0; i<=n ; i++){
            sum = sum+i
                            }
        }
    
      else {

            return false
        }
    
return sum
}

let answer = f(3.5)
console.log(answer)