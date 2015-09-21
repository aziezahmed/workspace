var sqlite3 = require('sqlite3').verbose();  
var file = "../sql/bookmarks.db";  
var db = new sqlite3.Database(file);  
db.all("SELECT * FROM bookmarks", function(err, rows) {  
        rows.forEach(function (row) {  
            console.log(row.title, row.url);  
        })  
    });   
db.close(); 