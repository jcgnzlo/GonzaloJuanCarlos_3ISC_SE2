var fs = require('fs');

fs.readFile('info.txt', 'utf8', function(err, data){

    console.log(data);
});