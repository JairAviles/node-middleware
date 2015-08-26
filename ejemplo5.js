/*
 * Real life Middleware app example
 */

var connect = require('connect');
var app = connect();

// Authentication validation. Please refer to ejemplo6.js and ejemplo7.js for callback functions definition.
// For a complete app integration, though, check out ejemplo8.js file
app
	.use('/admin', restrict)
	.use('/admin', admin)
	.use(hello)
	.listen(3000);