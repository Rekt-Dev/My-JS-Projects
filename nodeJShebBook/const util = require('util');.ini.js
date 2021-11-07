<<<<<<< HEAD
const util = require('util');
const dns = require('dns');
const reverse = util.promisify(dns.reverse);
async function reverseIPLookup(ip) {
    const domains = await reverse(ip);
    console.log(domains);
}
=======
const util = require('util');
const dns = require('dns');
const reverse = util.promisify(dns.reverse);
async function reverseIPLookup(ip) {
    const domains = await reverse(ip);
    console.log(domains);
}
>>>>>>> d902a94958fbce50103c9a0f3dcf0444327f2adc
reverseIPLookup('8.8.8.8');