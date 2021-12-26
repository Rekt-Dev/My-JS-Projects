function playRound(playerSelection,computerSelection){
    let result= 1
    let rock = 1
    let paper = 2
    let scissors = 3
console.log(playerSelection,computerSelection)
if (playerSelection === computerSelection){
    console.log(`its a tie`)

} if (playerSelection==='rock' && computerSelection==="paper"){
        console.log(`paper covers rock ${computerSelection} wins`)
        return `${computerSelection} wins`

}   if (playerSelection==='rock' && computerSelection==="scissors"){
    console.log(`rock break scissors ${playerSelection} wins`)
    return `${playerSelection} wins`

}    if (playerSelection==='scissors' && computerSelection==="paper"){
    console.log(`scissors cut paper ${playerSelection} wins`)
    return `${playerSelection} wins`
}    if (playerSelection==='scissors' && computerSelection==="rock"){
    console.log(`rock breaks scissors ${computerSelection} wins`)
    return `${computerSelection} wins`
}    if (playerSelection==='paper' && computerSelection==="rock"){
    console.log(`paper covers rock ${playerSelection} wins`)
    return `${playerSelection} wins`
}    if (playerSelection==='paper' && computerSelection==="scissors"){
    console.log(`scissors cut paper ${computerSelection} wins`)
    return `${computerSelection} wins`
}
}
function computerPlay(randomChoice){
       let randomized= Math.ceil(Math.random()*3)   // we got a number between 1-3 now, we need to make it equal to a game choice.
        let gameChoice=0
        console.log(randomized)
            if(randomized===1){
                return "paper"
            }          
               if(randomized===2){
                return "scissors"
            }        
                if(randomized===3){
                return "rock"
            }
}
prompt('joseph')
//console.log(`this is computerPlay function--> ` +computerPlay())
let result = playRound(`paper`,computerPlay())
//console.log(`this is result -- > ${result}`)