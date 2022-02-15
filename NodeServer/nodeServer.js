import { createServer } from 'http';
import { readFileSync } from 'fs';

//const data=require()
const server=createServer((req, res) => {


    res.writeHead (200, { 'Content-Type': 'text/html' });
    let html = readFileSync('./index.html');
    res.end(html) ;


 
});


server.listen('3535');
