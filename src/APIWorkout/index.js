//// Importing module can be used with .js by default. But actually not required.
//var nbuffer = require('./NBuffer.js')
//var nfile = require('./NFile')
//var nfile = require('./NEventEmitter')


// Try to read all the files in this directory instead using single require for all the files.
// By default the current path will be on root, when trigger from test case the path is not same 
// so the ./ will not return the same when running from test case and source. 
// Using path will give the exact path with __dirname.

var fs = require('fs');
var path = require('path');

fs.readdir(path.normalize(__dirname), function (err, files) {
	if (err) {
		throw new Error ('Problem in loading APIWorkout Module...');
	}
	console.log(files);
	
	var file;
	for (var i = 0; i < files.length; i++) {
		file = files[i];
		file = file.substr(0, file.indexOf('.js'));
		var loadedObj = require(path.join(__dirname, file));
		console.log(loadedObj)
	}
	});