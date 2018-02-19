const express = require('express');
const path = require('path');
const app = express();
const port = 8000
app.set('port', (process.env.PORT || port));
app.use(express.static(path.join(__dirname,'client')));

// run server
const server = app.listen(app.get('port'), function() {
	console.log("temporaly Holla at port: "+port)
});

// require('./server/config/mongoose.js');
require('./server/config/rountes.js')(app);
