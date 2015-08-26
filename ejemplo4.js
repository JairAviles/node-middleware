/*
 * Multiples Middlewares
 */

var connect = require('connect');
var app = connect();

//Function One
function logger(req, res, next){
	console.log('backend  %s %s', req.method, req.url);
	next();
}
//Function two
function hello (req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World!!!');
}

//WARNING: It won't execute all middleware functions as follow
app
    .use(logger)
    .use(logger)
    .use(logger)
	.use(hello)
	.listen(3000);