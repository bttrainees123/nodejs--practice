var express = require ('express');

var app = express();

app.get('/login/:username/:userpassword',(req,res)=>{
    var username = req.params.username;
    var userpassword= req.params.userpassword;

    if(username=="vansh" && userpassword=="kushwaha"){
        res.send('vansh login successfully');
    }else{
        res.send('login failed | user correct username and password')
    }
})
app.listen(8080);
console.log('The Server Is Running on 8080');