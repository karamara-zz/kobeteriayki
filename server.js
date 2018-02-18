var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, "./client")));

var server = app.listen(8000, function(){
	console.log('listening local host 8000')
})