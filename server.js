var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
  
  
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anticounterfeit',
    database: 'abbyfy'
});
  
// connect to database
dbConn.connect(); 
 
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
 
// Login
app.post('/login', function (req, res) {
    
    var email = req.body.email;
    var password = req.body.password;
    var category = req.body.category;
    dbConn.query("SELECT category FROM users where email = ? AND password = ? AND category = ?", [email, password, category], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, output: results, message: 'success' });
    });
});

// Profile details
app.post('/profile', function (req, res) {
    
    var email = req.body.email;
    dbConn.query("SELECT * FROM users where email = ?", email , function (error, results, fields) {
        return res.send({ error: false, output: results, message: 'success' });
    });
});

// View Messages
app.post('/mymessages', function (req, res) {
    
    var email = req.body.email;
    dbConn.query("SELECT * FROM Messages where user_id_from = ? or user_id_to = ?", [email,email] , function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, output: results, message: 'success' });
    });
});

// Send Messages
app.post('/sendmessages', function (req, res) {
    
    var from = req.body.from;
    var to = req.body.to;
    var content = req.body.content;
    var date = req.body.date;
    dbConn.query("INSERT INTO Messages ( message_id, user_id_from, user_id_to, content, date_created ) VALUES  ( null, ? , ? , ? , ? )", [from,to,content,date] , function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, output: results, message: 'success' });
    });
});


// Signup
app.post('/signup', function (req, res) {
    
    var email = req.body.email;
    var password = req.body.password;
    dbConn.query("SELECT category FROM login where email = ? AND password = ?", [email, password], function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'users list.' });
    });
});
 
 
 
// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});
 
module.exports = app;