const http = require('http');
const server = http.createServer((req, res) => {

    res.write(`sup ma bishes ? yaaahie ? this is ${http} `)

})


server.listen('6969');