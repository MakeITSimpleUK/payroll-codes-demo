var http = require("http");
var express = require('express');
var app = express();
var payrollData = require('./models/PayrollData');


// Set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function (req, res) {
	res.render(__dirname + '/views/index', {
		inputs: payrollData.inputs,
		outputs: payrollData.outputs
	});
});

app.listen(8080);

console.log('Server is listening on port 8080');