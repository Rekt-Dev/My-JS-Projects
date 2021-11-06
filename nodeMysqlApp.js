const express = require('express')
const mySql = require('mysql')

//create connection

const db = mySql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',

});
//connect

db.connect((err) => {
    if (err) {

        throw err;
        res.send('db created...')
    }


})
const app = express()

app.listen(3535, () => {

    console.log('server is on @ 3535 sire...')

})