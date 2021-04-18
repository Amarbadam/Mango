var express = require('express');
var router = express.Router();
var connection = require ('../connection/connection');

router.get('/category/:id', function(request, response) {
	var id = request.params.id;
	connection.query('SELECT DISTINCT * category FROM blogPost WHERE id = ?', [id], 
	function (error, results, fields) {
		if (!error) {
			response.render("category", {category:results[0]});
		}else {
			console.log(error);
		}
	});
});
module.exports = router;