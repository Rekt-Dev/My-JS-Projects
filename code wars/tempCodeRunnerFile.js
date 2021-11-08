/*
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {

      let numberOfElements = n
      let rowNumber = n


      for (i=0; i<n; i++){

            for(j=0; j<n; j+2)

            console.log(j)
            console.log(i)
      }

    console.log(`this is n ${n}`)

    if (n === 1) {

        return 1
}
}

let result = rowSumOddNumbers(5)
console.log(result)