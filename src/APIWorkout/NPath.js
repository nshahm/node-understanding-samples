var path = require('path');

// NONE OF THESE WILL CHECK FOR REAL EXISTENSE OF PATH. EXCEPT PATH.EXISTS.
// See fs.exists(filename) will check for real path.
// See sample at NFile.exists.

// Normalize
//path.normalize('////abc/def//ghi/../.') -  \abc\def
console.log('path.normalize(\'////abc/def//ghi/../.\') - ' , path.normalize('////abc/def//ghi/../.'));

// Join - it will join and then normalize
//path.join('a','b','c/d','e','f','..') -  a\b\c\d\e
console.log('path.join(\'a\',\'b\',\'c/d\',\'e\',\'f\',\'..\') - ', path.join('a','b','c/d','e','f','..'));

// Resolve - It joins the current directory and then add the listed paths in resolve.
// C:\shahm\dev\prototypes\nodejs-understanding-samples\file:\c:shahm\abc\zyx
console.log('path.resolve(\'file://c:\shahm\', \'abc/zyx\')', path.resolve(	'file://c:\shahm', 'abc/zyx'));

// Relative - finding the relative path between multiple paths.
//path.relative('a/b/c/d', 'a/b/e/f/g') ..\..\e\f\g
console.log('path.relative(\'a/b/c/d\', \'a/b/e/f/g\')', path.relative('a/b/c/d', 'a/b/e/f/g'));

//dirname - gives the current directory of the mentioned file
//path.dirname('../../res/sample.txt') ../../res
console.log('path.dirname(\'../../res/sample.txt\')', path.dirname('../../res/sample.txt'));

//basename - give the file name with extension that is mentioned.
//path.basename('../../res/sample.txt') -  sample.txt
console.log('path.basename(\'../../res/sample.txt\') - ', path.basename('../../res/sample.txt'));

// basename with optional second param - gives the filename with no extension if it matches the extension mentioned
// it will return the filename
//path.basename('../../res/sample.txt', '.txt') -  sample.txt
console.log('path.basename(\'../../res/sample.txt\', \'.txt\') - ', path.basename('../../res/sample.txt', '.txt'));

// extname - gives the extension alone on the specified file.
// path.extname('../../res/sample.txt') .txt
console.log('path.extname(\'../../res/sample.txt\') - ', path.extname('../../res/sample.txt'));
// No extension only with .
//path.extname('../../res/sample.') -  .
console.log('path.extname(\'../../res/sample.\') - ', path.extname('../../res/sample.'));

// No result - empty string.
console.log('path.extname(\'../../res/sample\') - ', path.extname('../../res/sample'));
console.log('path.extname(\'../../res/.\') - ', path.extname('../../res/sample/.'));



