 function busStop(busStops){
   let leftOnBus = 0
       
  for (let i=0;i<busStops.length;i++){
    console.log(`this is leftonbus -- > ${leftOnBus}`)
    
        leftOnBus = parseInt(busStops[i][0]) - parseInt(busStops[i][1])  

        console.log(`this is leftonbus supposed 2 b 4  += -- > ${leftOnBus}`)

          leftOnBus+=leftOnBus

          console.log(`this is leftonbus after other  += -- > ${leftOnBus}`)
        }
  }



let numbered = busStop([[10,6],[3,5],[5,8]])
console.log(numbered)