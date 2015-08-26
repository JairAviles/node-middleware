/*
 *  A complete middleware app
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

function authWithDB(user, pass, cb) {
	if (pass !== 'backend') {
		return cb('Incorrect username or password');
	}
	cb();
}

function restrict(req, res, next) {
	var authorization = req.headers.authorization;

	if(!authorization) {
		return next(new Error('Unauthorized'));
	}

	var parts = authorization.split(' ');
	var schema = parts[0];
	var auth = new Buffer(parts[1], 'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

	authWithDB(user, pass, function(err) {
		if (err){
				return next(err);
		}
		next();
	});
}

function admin(req, res, next) {
	switch(req.url) {
		case '/':
			res.end('try /users');
		 break;
		case '/users':
			res.setHeader('Content-type', 'application/json');
			res.end(JSON.stringify(['jair', 'israel', 'jocabed', 'socorro']));
		 break;
	}
}

function errorHandler() {
	// variable thet determines which enviroment is running the current app !!!
	var env = process.env.NODE_ENV || 'deployment';

	return function(err, req, res, next) {
		res.statusCode = 500;
		switch (env) {
			case 'development':
				res.setHeader('Content-type', 'application/json');
				res.end(JSON.stringify(err));
			 break;
			default:
				res.end('Server error');
			 break;
		}
	};
}

app
    .use(logger)
    .use('/admin', restrict)
    .use('/admin', admin)
    .use(hello)
    .use(errorHandler)
	.listen(3000);