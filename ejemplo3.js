/*
 * Hello world
 */

//Show Hello Wolrd message as text-plain response in browser
function hello (req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World!!!');
}
var connect = require('connect');
var app = connect();

app
	.use(hello)
	.listen(3000);

