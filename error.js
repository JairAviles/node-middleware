/*
 * Error handler
 */

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