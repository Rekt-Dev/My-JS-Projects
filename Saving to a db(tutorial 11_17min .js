const { response } = require('express');
const express = require('express');
const app = express();
app.listen(3535, () => console.log('listening @ 3535 ! '));
app.use(express.json({ limit: '1mb' }));

const database = [];

app.post('api', (request, response) => {

    console.log(`I got a request ! `)
    console.log(request.body);
    let data = request.body
    database.push(data)
    console.log(database)
    response.json({

        status: 'success',
        location: 12,
        height: 17
    });



})