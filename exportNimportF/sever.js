var http = require('http');

var simpleObj = require('./simple');


http.createServer((req,res)=>{
    res.writeHead(200, {'content-type': 'text/html'});
    res.write("<h1>" + simpleObj({
        username:'vansh',
        userpass:'kushwaha'
    }))
    res.end();
}).listen(8080);
console.log("The Server Is Running");