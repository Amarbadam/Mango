var express = require('express');
var router = express.Router();
var connection = require ('../connection/connection');

router.get('/category/:category', function(request, response) {
	var category = request.params.category;
	connection.query('SELECT * FROM blogPost WHERE category = ?', [category], 
	function (error, results, fields) {
		if (!error) {
			response.render("category", {category:results[0]});
		}else {
			console.log(error);
		}
	});
});
module.exports = router;