const express = require("express")
const Datastore = require("nedb");


const app = express()
app.listen(3000, () => console.log('listening @ 3k bro. chill'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('myDB.db');
database.loadDatabase();

app.post('bleh', (request, response) => {
    const data = request.body
    const timestamp = Date.now();
    data.timestamp = timestamp

    console.log("some1s bugging me with a request bro ffs")
    console.log * ("this is request.body sire" + request.body)
    database.insert(data);
    response.json(data)
})