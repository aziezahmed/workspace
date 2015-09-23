var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();  

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
	
	var file = "../sql/bookmarks.db";  
	var db = new sqlite3.Database(file);  
	db.all("SELECT * FROM bookmarks", function(err, rows) {  
		res.json(rows);
	});   
	db.close(); 
	
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});