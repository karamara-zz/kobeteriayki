const test = require('../controllers/test.js')
const visitors = require('../controllers/visitors')

module.exports = function(app)
{
	app.get('/test', function(req,res)
	{
		test.testJSON(req,res);
	})
	app.get('/testVisitor', function(req,res){
		visitors.visit(req,res);
	})


}