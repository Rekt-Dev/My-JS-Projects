/* (-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true */

function isDivideBy(number, a, b) {

    if (number % a === 0 && number %b ===0){    
    
        return true } 

else {
 
       return false
}

}

let answer = isDivideBy(50, 10, 5)
console.log(answer)