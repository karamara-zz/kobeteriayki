module.exports = (function(){
	return {
		testJSON: function(req, res){
			res.json({test:"test api works"})
		}
	}
})()