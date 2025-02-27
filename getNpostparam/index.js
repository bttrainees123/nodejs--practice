var express  = require ('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/login',(req,res)=>{
    var usernames = req.body.usernames;
    var userpasswords = req.body.userpasswords;

    if(usernames=='vansh'&& userpasswords=='kushwaha'){
        res.send("Login Success");
    }else{
        res.send("Login Failed")
    }
})
app.listen(9090);
console.log('The Server Is Running On Port 9090')