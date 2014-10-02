var util = require('util');
var EE = require('events').EventEmitter;


var CompareNumbers = function() {};

console.log(CompareNumbers);
util.inherits(CompareNumbers, EE);
console.log(CompareNumbers);

CompareNumbers.prototype.checkGreater = function (a, b) {
	if (a < b) {
		this.emit('isgreater', true);
	} else {
		this.emit('error', new Error ('A is less than B'));
	}
};

//var CompareNumbers = function() {
//	
//	return {
//		checkGreater : function (a, b) {
//			if (a < b) {
//				this.emit('isgreater', true);
//			} else {
//				this.emit('error', new Error ('A is less than B'));
//			}		
//		}
//	};
//};


var compareNumberInstance = new CompareNumbers();

compareNumberInstance.on('isgreater', function (flag) {
	console.log('isgreater event triggered', flag);
});

compareNumberInstance.on('error', function (error) {
	console.log(error);
});

compareNumberInstance.checkGreater(5, 2);

