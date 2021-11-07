<<<<<<< HEAD
const fs = require('fs');
fs.writeFile(`./test.txt`, 'Hello World!', (err) => {
    if (err) throw err;
    fs.readdir('./tlaa', (err, result) => {
        console.log(result);
    });
});
const randomString = Math.random().toString(36).substring(7);
=======
const fs = require('fs');
fs.writeFile(`./test.txt`, 'Hello World!', (err) => {
    if (err) throw err;
    fs.readdir('./tlaa', (err, result) => {
        console.log(result);
    });
});
const randomString = Math.random().toString(36).substring(7);
>>>>>>> d902a94958fbce50103c9a0f3dcf0444327f2adc
console.log("this is " + randomString)