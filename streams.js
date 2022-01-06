const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./toilet.txt');
const writeStream = fs.createWriteStream('./outStream.txt');
const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);