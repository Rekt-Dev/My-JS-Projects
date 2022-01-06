function sum(arr, n) {
    if(n<=0)
    {
      return 1;
       } 
     
      else{
          let param
         return param=(sum(arr, n-1) + arr[n-1])-0.25
        //  let parsed = parseInt(param)
           
      }
  
  
  
  }
  
  let result = sum([2,4,6,12,5],4)
  console.log(result)