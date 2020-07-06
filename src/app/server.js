var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'root',
        password: 'newp@ss',
        server: '14.98.145.61',
        database: 'nmonit' 
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        
    });
});

var server = app.listen(9003, function () {
    console.log('Server is running at 9003..');
});