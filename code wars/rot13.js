
function rot13(message){
    let [a,A,b,B,c,C,d,D,e,E,f,F,g,G,h,H,i,I,j,J,k,K,l,L,m,M,n,N,o,O,p,P,q,Q,r,R,s,S,t,T,u,U,v,V,w,W,x,X,y,Y,z,Z] = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26]

    let [newAValue, newBValue, newCValue, newDValue,newEValue, newFValue,newGValue, newHValue, newIValue,newJValue, newKValue,newLValue,newMValue,newNValue,newOValue,newPValue, newQValue, newRValue, newSValue, newTValue, newUValue, newVValue, newWValue, newXValue, newYValue, newZValue ] = [0,0,0,0,,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

    let newValuesArray = []


        // this function takes 2 parameters(arrays) and runs the Rot13 replacement on them, outputting the last array that should be converted to letters and sent to the user in a return.

    function replaceValues(arrayNew,arrayCyph){ 
        let arrayCyphCounter=0
    
        for (iiii=0;iiii<arrayNew.length; iiii++){
                
                                    if (arrayNew[iiii]>26){
                                            arrayNew[iiii] = arrayCyph[arrayCyphCounter]
                                            console.log(`this is array new: ${arrayNew}, this is iiii: ${iiii}`)
                                                arrayCyphCounter++
    
    
    
    console.log(`this is arrayCyphCunter: ${arrayCyphCounter}`)
                                            }
    
    
                                        }
                                            return arrayNew
                                    
                                    }

    let ii=0

    let originalLetter = message[ii]

if (typeof originalLetter===Number ){

            let stringedLetter = string(originalLetter)
            console.log(`this is stringedLetter ${stringedLetter}`)

}
   


//iterate over string to add 13 to each letter
    for(ii; ii<=message.length; ii++){
        console.log(ii)
            if(message[ii]==='a' || message[ii]==='A'){
                        newAValue=a+13
                        newValuesArray.push(newAValue)
            }

    if(message[ii]==='b' || message[ii]==='B'){
                newBValue=b+13
                newValuesArray.push(newBValue)

}
    if(message[ii]==='c' || message[ii]==='C'){
        newCValue=c+13
        newValuesArray.push(newCValue)

}
    if(message[ii]==='d' || message[ii]==='D'){
    newDValue=d+13
    newValuesArray.push(newDValue)

}
    if(message[ii]==='e' || message[ii]==='E'){
    newEValue=e+13
    newValuesArray.push(newEValue)

}
    if(message[ii]==='f' || message[ii]==='F'){
    newFValue=f+13
    newValuesArray.push(newFValue)

}
if(message[ii]==='g' || message[ii]==='G'){
    newGValue=g+13
    newValuesArray.push(newGValue)

}
if(message[ii]==='h' || message[ii]==='H'){
    newHValue=h+13
    newValuesArray.push(newHValue)

}
if(message[ii]==='i' || message[ii]==='I'){
    newIValue=i+13
    newValuesArray.push(newIValue)

}
if(message[ii]==='j' || message[ii]==='J'){
    newJValue=j+13
    newValuesArray.push(newJValue)


}
if(message[ii]==='k' || message[ii]==='K'){
    newKValue=k+13
    newValuesArray.push(newKValue)

}
if(message[ii]==='l' || message[ii]==='L'){
    newLValue=l+13
    newValuesArray.push(newLValue)

}
if(message[ii]==='m' || message[ii]==='M'){
    newMValue=m+13
    newValuesArray.push(newMValue)

}
if(message[ii]==='n' || message[ii]==='N'){
    newNValue=n+13
    newValuesArray.push(newNValue)

}
if(message[ii]==='o' || message[ii]==='O'){
    newOValue=o+13
    newValuesArray.push(newOValue)

}
if(message[ii]==='p' || message[ii]==='P'){
    newPValue=p+13
    newValuesArray.push(newPValue)

}
if(message[ii]==='q' || message[ii]==='Q'){
    newQValue=q+13
    newValuesArray.push(newQValue)

}
if(message[ii]==='r' || message[ii]==='R'){
    newRValue=r+13
    newValuesArray.push(newRValue)

}
if(message[ii]==='S' || message[ii]==='s'){
    newSValue=s+13
    newValuesArray.push(newSValue)

}
if(message[ii]==='t' || message[ii]==='T'){
    newTValue=t+13
    newValuesArray.push(newTValue)

}
if(message[ii]==='u' || message[ii]==='U'){
    newUValue=u+13
    newValuesArray.push(newUValue)

}
if(message[ii]==='v' || message[ii]==='V'){
    newVValue=v+13
    newValuesArray.push(newVValue)

}
if(message[ii]==='w' || message[ii]==='W'){
    newWValue=w+13
    newValuesArray.push(newWValue)

}
if(message[ii]==='x' || message[ii]==='X'){
    newXValue=x+13
    newValuesArray.push(newXValue)

}
if(message[ii]==='y' || message[ii]==='Y'){
    newYValue=y+13
    newValuesArray.push(newYValue)

}
if(message[ii]==='z' || message[ii]==='Z'){
    newZValue=z+13
    newValuesArray.push(newZValue)
}  
}
let cypheredNumber=0
let cypheredArray=[]

for(counter=0;counter<newValuesArray.length; counter++){

    if (newValuesArray[counter]>26   ){

                cypheredNumber=newValuesArray[counter]-26
                cypheredArray.push(cypheredNumber)
                console.log(`this is cyphered number --> ${cypheredNumber}`)


console.log(`this is cyphered array  --> ${cypheredArray}`)
    for (iii=0;iii<newValuesArray; iii++){
            
        console.log(`this is newvaluesarray ${newValuesArray}`)
                                if (newValuesArray[iii]>26){
              
                                }
                                   }                                  
                                            let newestNumberArray= replaceValues(newValuesArray,cypheredArray)
                                    console.log(`this is newewst number array ${newestNumberArray}
                                    `)                  
                                    console.log(`this is newewst number array ${newestNumberArray}`)                  
                                                                                          
                                                              
                                }
                                                          }}
          
    
      
let result = rot13('abcdefghijklmnopa')
console.log(`this is result: ${result}`)
