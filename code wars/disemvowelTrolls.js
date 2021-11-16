/*Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.*/


function disemvowel(str) {
    let vowelArray = ['a','A','e','E','i','I','o','O','u','U']
    let newStr = ''
    let j
    newStr=str.substr(j,j+1)


    for (i=0; i<str.length; i++){
        console.log(`this is i ${i}`)

            for (j=0; j<vowelArray.length; j++){

                console.log(`this is j ${j}`)
                if(str[i]===vowelArray[j]){
                            console.log(`this is str[i] which is a vowel, we need 2 remove it from the original string 2 hurt the trolls --> ${str[i]}`)
                            console.log(`this is newStr--> ${newStr}`)
                    }



            }
    }
    console.log(`this is strlength--> ${str.length}`)

    return str;
  }


  let answer = disemvowel("this site is a filthy toilet")
  console.log(answer)