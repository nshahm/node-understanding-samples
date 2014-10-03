var fs = require('fs');
var path = require('path');

var sampleTxtFile = path.join(__dirname, '../../res/sample.txt');
fs.stat(sampleTxtFile, function(err, stats) {
	console.log('fs.stat() - ', stats);
	console.log('stats.isFile() - ', stats.isFile());
	console.log('stats.isDirectory() - ', stats.isDirectory());
	console.log('stats.isBlockDevice() - ', stats.isBlockDevice());
	console.log('stats.isCharacterDevice() - ', stats.isCharacterDevice());
	console.log('stats.isSymbolicLink() - ', stats.isSymbolicLink());
	console.log('stats.isBlockDevice() - ', stats.isBlockDevice());
	console.log('stats.isFIFO() - ', stats.isFIFO());
	console.log('stats.isSocket() - ', stats.isSocket());
	
	
});

