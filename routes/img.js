var express = require('express');
var router = express.Router();
var path = require('path');
var connection = require('../connection/connection');

router.get('/img', function(request, response) {
	connection.query('SELECT * FROM blogPost', function (err, res, field){
		if (!err){
			response.render("img", {users: res});
		}
		else{
			console.log(err);
		}
	});
	

});
module.exports = router;