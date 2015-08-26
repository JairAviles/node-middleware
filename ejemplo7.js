/*
 * Authentication Restriction function
 */

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