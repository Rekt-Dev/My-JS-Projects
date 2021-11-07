//count the number of even numbers / odd numbers
// if more than 1 even or odd then apply whole array as the majority
// after applying odd or even, find the outcast and print it out



// check if number in array is odd or even with %
let evenCounter = 0
let oddCounter = 0


function oddEven(array) {

    for (j = 0; j < array.length; j++) {

        //check every number  if odd or even 
        if (array[j] % 2 == 0) {

            evenCounter++
            console.log(evenCounter)
        } else {

            oddCounter++

        }
    }
}

if (evenCounter >= 2) {

    console.log('majority is even')

    findOdd()


}

if (oddCounter >= 2) {

    console.log('majority is odd')

    findEven()
}




console.log(array)


//majority is odd, so lets create a function thatll find the even number  and print it out

function findEven() {
    if (oddCounter >= 2) {


        for (counter = 0; counter < array.length; counter++) {

            if (array[counter] % 2 == 0) {

                console.log(array[counter])


            }
        }
    }
}

//majority is even, lets find the odd 1 and console log it. 

function findOdd() {

    if (evenCounter >= 2) {


        for (counterr = 0; counterr < array.length; counterr++) {

            if (array[counterr] % 2 !== 0) {

                console.log(array[counterr])

            }
        }
    }
}



oddEven([array])
array = [4, 5, 6, 8, 12, 22]