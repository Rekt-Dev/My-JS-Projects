import express from "express"
const app = express()

app.get("/", function(req,res){
            res.send(`<h1>Sup world ? </h1>`)
})




app.listen(3636,function(){
        console.log(`Server started sire on port 3636`)
})
