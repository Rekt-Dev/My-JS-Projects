function sum(arr, n) {
 
    if (n<=0 ){
      return 0;
    
    } else {
      console.log(`this is n after else ${n}`)
      console.log(typeof(n))
    
        return sum(arr,n-1)+arr[n-1]     
    
    }
    }
    let result = sum([2, 3, 4, 5], 2)
    console.log(`this is result = ${result}`)