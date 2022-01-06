const httpServer = require('http').Server
class Myserver extends httpServer {

    constructor()

    {
        super();
        this.on('request', this.requestHandler);
        this.on('connection', this.connectionHandler);
        this.listen(3009);
    }

    requestHandler(request, response) {

        console.log()

        response.end(`sup bro, server is on, ${httpServer}  `)
    }
}

const myServer = new Myserver();