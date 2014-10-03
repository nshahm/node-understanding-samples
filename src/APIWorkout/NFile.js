var fs = require('fs');
var path = require('path');

/*
 * READ / WRITE will be only good if we use it for one single time. 
 * In other scenarios go for streams.
 */

var _file = function() {
	
	var sampleTxtFile = path.join(__dirname, '../../res/sample.txt');
	console.log(sampleTxtFile);
	var isSampleTxtFileExists = false;
	
	var readFile = function (isExists) {
		isSampleTxtFileExists = isExists;
		
		if (!isSampleTxtFileExists) {
			console.log(sampleTxtFile + 'not exists. plese verify it');
			throw new Error(sampleTxtFile + 'not exists. plese verify it', err);
		}
				
		/*
		 * Reading the file.
		 */ 	
		
		fs.readFile(sampleTxtFile, [], function(err, data) {
			if (err) {
				throw err;
			}
			console.log('fs.readFile ', data.toString());
		});
		
		var data = fs.readFileSync(sampleTxtFile);
		console.log('fs.readFileSync ', data);
	};

	// Async
	fs.exists(sampleTxtFile, readFile);
	
	// Sync
	console.log('fs.existsSync( '+ sampleTxtFile + ' )', fs.existsSync(sampleTxtFile));
}_file();



var _fileRead = function() {
	var bbslistTxtFile = path.join(__dirname, '../../res/bbslist.txt');
	/*
	 * Opening the file. with specific mode.
	 */
	fs.open(bbslistTxtFile, 'r', function(err, fd){
		if (err) {
			console.log(err);
			throw new Error (bbslistTxtFile + 'file does not exists', err);
		}
		
		// The length of the bytes read is available, the actual bytes is available in buffer.
		// If dataBytesLength == 0 then it reaches the end of file.
		var readCallback = function(err, dataBytesLength) {
			if (err) {
				throw new Error('Problem in reading databytes when reading', bbslistTxtFile);
			}
			console.log(buffer.slice(0, dataBytesLength));
		};
		
		console.log('filedescriptor for bbslist.js - ', fd);
		
		var buffer = new Buffer(1024);
		var offset = 0;
		var bufferLength = buffer.length;
		var position = 0;
		fs.read(fd, buffer, offset, bufferLength, position, readCallback);
	});
}

_fileRead();


var _fileWrite = function() {
	
	var blahblahTxt = path.join(__dirname, '../../res/blahblah.txt');
	fs.open(blahblahTxt, 'a', function(err, fd) {
		if (err) {
			throw new Error(err);
		}
			var buffer = new Buffer('blah blah blah');
			var offset = 0;
			var bufferLength = buffer.length;
			var position = null;
			
			var writeCallback = function (err, written, buff) {
				if (err) {
					throw new Err('Unable to write in to file blabblah.txt', err);
				}
				/*
				 * Closing the file.
				 */
				fs.closeSync(fd);
				console.log('Writen in file', written);
				console.log('Bytes length written', buff);
			};
			
			fs.write(fd, buffer, offset, bufferLength, position, writeCallback);
	});
}

_fileWrite();

module.exports.nfile = _file;