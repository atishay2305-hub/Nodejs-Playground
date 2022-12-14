var fs = require('fs');

//create a file named mynewfile3.txt:
fs.writeFile('mynewfile3.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('Replaced');
});
