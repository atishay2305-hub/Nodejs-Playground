var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2022&month=december';
var q = url.parse(adr, true);

// host is the localhost: 8080
//pathname is the default.htm present in the adr i.e. address
// search is the year=2022&month=december

console.log(q.host);
console.log(q.pathname);
console.log(q.port);
console.log(q.hostname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);

