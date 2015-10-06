var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
  next();
});

var file = "../sql/bookmarks.db";
var db = new sqlite3.Database(file);
var sqlRequestAllRows = "SELECT * FROM bookmarks";
app.get('/', function(req, res, next) {
  db.all(sqlRequestAllRows, function(err, rows) {
    res.json(rows);
  });
});

app.post('/', function (req, res) {
  var title = req.body.title;
  var url = req.body.url;
  var sqlRequest = "INSERT INTO bookmarks (title, url) VALUES ('" + title + "', '" + url + "')";
  db.run(sqlRequest, function(err) {});
  db.all(sqlRequestAllRows, function(err, rows) {
    res.json(rows);
  });
});

app.delete('/:id', function (req, res) {
  var sqlRequest = "DELETE FROM bookmarks WHERE id='" + req.params.id + "'";
  db.run(sqlRequest,function(err) {});
  db.all(sqlRequestAllRows, function(err, rows) {
    res.json(rows);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
