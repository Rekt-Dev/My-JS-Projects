var gimme = function (inputArray) {
    // Clone the input array.
    var clonedArray = inputArray.slice(0);
    // Sort it in ascending order.
 clonedArray.sort(function(a, b){
      return a-b
    });
    
    return inputArray.indexOf(clonedArray[1]);
  };