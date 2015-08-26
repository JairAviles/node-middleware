/*
 * My first Middleware using 'connect' module
 */

//Not a node callback function but a Middleware function
//	req  - Request to server
//	res  - Response object 
//	next - Function to execute synchronously after finishing the current
function logger(req, res, next){
	console.log('backend  %s %s', req.method, req.url);
}

var connect = require('connect');
var app = connect();

//print text within logger function with method name and url
app
	.use(logger)
	.listen(3000);