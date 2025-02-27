var express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.send("<h1> Vansh Kushwaha Is Logged In Succesfully !");
res.end();
})
app.listen(8080);
console.log("The Server Is Runnings")