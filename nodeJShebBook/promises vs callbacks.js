const dns = require('dns');
dns.reverse('8.8.8.8', (err, domains) => {
    console.log(domains);
});