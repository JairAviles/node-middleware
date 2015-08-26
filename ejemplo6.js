/*
 * Authentication Restriction function
 */

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