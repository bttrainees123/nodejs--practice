var express = require('express');
var app = express();

var login = require('./Login/login');
app.use('/login',login);

var logout = require('./Logout/logout');
app.use('/logout', logout);

app.listen(8008);
console.log("The Servr Is Running on Port 8080");
