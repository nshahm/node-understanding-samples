var path = require('path');

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
//..\..\e\f\g
console.log('', path.relative('a/b/c/d', 'a/b/e/f/g'));

