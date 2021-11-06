const util = require('util');
const dns = require('dns');
const reverse = util.promisify(dns.reverse);
async function reverseIPLookup(ip) {
    const domains = await reverse(ip);
    console.log(domains);
}
reverseIPLookup('8.8.8.8');