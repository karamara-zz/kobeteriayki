var express = require('express');
var path = require('path');
var app = express();
app.set('port', (process.env.PORT || 7000));
app.use(express.static(path.join(__dirname,'client')));
var server = app.listen(app.get('port'), function() {
	console.log("temporaly Holla at port: 7000")
});