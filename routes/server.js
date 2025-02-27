var express = require ('express');

var app = express();

app.get('/get',(req,res)=>{
    res.send(`<h1> here is get method is called</h1>`);
})
app.post('/post',(req,res)=>{
    res.send(`<h1> here is post method is called</h1>`);
})

app.listen(8008);
console.log("The Server is Running on 8080");