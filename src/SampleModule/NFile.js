var fs = require('fs');

var _file = function() {
		
	fs.readFile('res/sample.txt', [], function(err, data) {
		if (err) {
			throw err;
		}
		console.log('fs.readFile ', data.toString());
	});
	
	
	var data = fs.readFileSync('res/sample.txt');
	console.log('fs.readFileSync ', data);
}
_file();

module.exports.nfile = _file;