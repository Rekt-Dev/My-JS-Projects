import express from "express"
const app = express()

app.get("/", function(req,res){
            res.send(`<h1>Sup world ? </h1>`)
})

app.get("/about", function(req,res){
        res.send(`<h1>my name is test and i love codinG </h1>`)
}) 

app.get("/careers", function(req,res){
        res.send(`<h1> WANNA WORK ?   ? </h1>`)
})
   

app.get("/contact", function(req,res){
        res.send(`<button id = "joseph">anonymous </button>`)
		
		let button=document.getElementById("joseph")
		button.onclick=function(){
			alert("sup?")
}
})


app.listen(3636,function(){
        console.log(`Server re\started sire on port 3636`)
})
             