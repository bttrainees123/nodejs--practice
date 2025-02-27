var express  = require('express');
var app =express();

app.use('/',(req,res,next)=>{
    console.log('middle ware is start');
    next();
});

app.get('/',(req,res,next)=>{
    res.send('This condition is executed after statisfying all condition of middle ware');
    next();
});

app.use('/',(req,res)=>{
    console.log('end after execution');
})
app.listen(8080);
console.log('The Server Running on 8080')