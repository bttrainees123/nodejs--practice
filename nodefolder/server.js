var http =require ('http');
var url = require ('url');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    
    var queryObject = url.parse(req.url,true).query;

    var uname= queryObject.uname;
    var userpass= queryObject.userpass;

    if(uname =="vansh" && userpass=="kushwaha"){
        res.write(`<center style='margin-top:20%; color:green'><h1>vansh kushwaha login successfully !</h1> </center>`)
    }else{
        res.write(`<center style='margin-top:20%; color:green'><h1>Login Failed ,Incorrect Password</h1> </center>`)
    }

    res.end();
}).listen(8080);
console.log("The Sever Is Running ")