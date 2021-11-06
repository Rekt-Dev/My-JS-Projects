const fs = require('fs');
const crypto = require('crypto');

const algorithm = `aes-256-ctr`;
const password = `pw`;
const key = crypto.scryptSync(password, `mySalt`, 32);
const iv = `dis is my strink`.toString(`hex`).slice(0, 16);

const readStream = fs.createReadStream(`./AfknReadStream.txt`);
const writeStream = fs.createWriteStream(`AfknLongWriteStreamBishSup.txt`);
const encrypStream = crypto.createCipheriv(algorithm, key, iv);

readStream.pipe(encrypStream).pipe(writeStream);