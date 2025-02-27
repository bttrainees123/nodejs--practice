var http = require ('http');
var obj = require('./db_port');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': 'text/html'});
    res.write("<h1>"+ obj.host + "<br>"+ obj.user + "<br>" + obj.databse + "<br>"+ obj.connectionLimited  );
    res.end();
}).listen(8080);
console.log("The Server Is Running On 8080");
