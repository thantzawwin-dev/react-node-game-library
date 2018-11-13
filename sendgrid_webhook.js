var localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'ujmnyefnujmiobgf' }, function(err, tunnel) {
  console.log('LT running');
});