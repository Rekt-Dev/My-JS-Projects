

function getSum(arg1, arg2) {
  
	if (typeof arg1 !== "number" || typeof arg2 !=="number")
	
		{
			let  NUMBERERROR = new Error("wtaf bro, no number ? ffs ! ");
			console.log("toilet")

				throw NUMBERERROR;


			}



else {

	return arg1+arg2 ;


}


console.log(getSum(3, 99)) ;


}

getSum ("e", 5)