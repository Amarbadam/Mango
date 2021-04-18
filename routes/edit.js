var express = require('express');
var router = express.Router();
var connection = require ('../connection/connection');
var path = require('path');



router.get('/edit/:id', function(request, response) {
	var id = request.params.id;
	connection.query('SELECT * FROM accounts WHERE id = ?', [id], 
	function (error, results, fields) {
		if (!error) {
			response.render("user/edit", {user:results[0]});
		}else {
			console.log(error);
		}
	});
});


router.post('/edit/:id', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	var email = request.body.email;
	var photo = request.files.photo;
	var fileName = photo.name;
	var id = request.params.id;
	connection.query('UPDATE accounts SET username=? , password=?, email=?, profilePicture=? WHERE id = ?',
	 [username, password, email, fileName, id], 
	function (error, results, fields) {
		if (!error) {
			photo.mv('./public/images/avatars'+ fileName);
			response.redirect("/admin");
		}else {
			console.log(error);
		}
	});
});

router.get('/editPost/:id', function(request, response) {
	var id = request.params.id;
	connection.query('SELECT * FROM blogPost WHERE id = ?', [id], 
	function (error, results, fields) {
		if (!error) {
			response.render("user/editPost", {blog:results[0]});
		}else {
			console.log(error);
		}
	});
});


router.post('/editPost/:id', function(request, response) {
	var title = request.body.title;
	var content = request.body.content;
    var photo = request.files.blogPhoto;
	var fileName = photo.name;
	var id = request.params.id;
	connection.query('UPDATE blogPost SET title=? , description=?, blogPhoto=? WHERE id = ?',
	 [title, content, fileName,id], 
	function (error, results, fields) {
		if (!error) {
			photo.mv('./public/images/newsPhoto/'+ fileName);
			response.redirect("/post");
		}else {
			console.log(error);
		}
	});
});



module.exports = router;