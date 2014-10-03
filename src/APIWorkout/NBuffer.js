
//var buf = require('buffer');

var _nbuffer = function() {
		
	var buff = new Buffer(30);
	buff.write('learning node buffer usage');
	
	console.log('Length', buff.length);
	console.log(' toJSON() ', buff.toJSON());
	console.log('toString() ',buff.toString('ascii'));	
	
	var buffer = new Buffer(10);
	buffer.fill('!');
	console.log(buffer.toString('ascii'));
	console.log(buffer.copy(buff, 1, 2, 10));
	console.log('buffer after copy', buff.toString('ascii'));
	
	console.log(buff.slice(4,10).toString('ascii'));
	console.log('Buffer.inspect_bytes ', buffer.inspect());
};
_nbuffer();

module.exports.nbuffer = _nbuffer;
