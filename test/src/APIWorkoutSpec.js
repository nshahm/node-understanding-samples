// Sample module is using chai expect instead node assert
global.chai = require('chai');
global.expect = chai.expect;

describe('Sample Module', function() {
	it('should load sample module', function() {
		var sampleModule = require('../../src/APIWorkout');
		console.log(sampleModule);
		expect(sampleModule).not.to.be.null;
	});
	
	it ('should read sample.txt', function() {
		var nfile = require('../../src/APIWorkout/NFile');
		expect(nfile).not.to.be.null;
	})
});