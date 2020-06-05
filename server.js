// Dependencies//
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Express App//
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express App to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initiates routes for api and html //
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Server listning//
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);

	// const http = require('http'),
	// 	server = http.createServer();

	// server.on('request', (request, response) => {
	// 	response.writeHead(200, { 'Content-Type': 'text/plain' });
	// 	response.write('Hello world');
	// 	response.end();
	// });

	// server.listen(3000, () => {
	// 	console.log('Node server created at port 8080');
	// });
});
