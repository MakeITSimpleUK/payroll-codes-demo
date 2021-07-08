var http = require("http");
var express = require('express');
var app = express();
// var payrollData = require('./models/PayrollData');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', async function (req, res) {
	// Run payroll
	const finalResults = await require('./components')();

	// console.log(finalResults)

	res.render(__dirname + '/views/index', {
		inputs: finalResults.inputs,
		outputs: finalResults.outputs
	});
});

app.listen(8080);

console.log('Server is listening on port 8080');