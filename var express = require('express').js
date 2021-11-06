var express = require('express')
var app = express()
var router = app.router

router.get('/', function(req, res) {
    res.send('hello world')
})

app.listen(3001)