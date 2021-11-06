const fs = require('fs');
fs.writeFile(`./test.txt`, 'Hello World!', (err) => {
    if (err) throw err;
    fs.readdir('./tlaa', (err, result) => {
        console.log(result);
    });
});
const randomString = Math.random().toString(36).substring(7);
console.log("this is " + randomString)