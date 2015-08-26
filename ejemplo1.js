/*
 * Simple Middleware using connect
 */

var connect = require('connect');
var app = connect();

app.listen(3000, function(){
	console.log('Server started on port 3000. Using connect middelware framework');
});