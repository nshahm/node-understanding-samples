// Use node assert
// or chai expect or assert or should
var assert = require('assert');
// Similar to test case class
describe ('Employee Module', function() {
	
	
	
	// similar to test case
	it ('should load employee module', function() {
		
		var emp = require('../../src/EmployeeModule');
		console.log(emp);
		assert(emp != null);
	});
});




