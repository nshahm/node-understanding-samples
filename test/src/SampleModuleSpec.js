// Sample module is using chai expect instead node assert
global.chai = require('chai');
global.expect = chai.expect;

//require('../../src/SampleModule/NBuffer')


describe('Sample Module', function() {
	it('should load sample module', function() {
		var sampleModule = require('../../src/SampleModule');
		console.log(sampleModule);
		expect(sampleModule).not.to.be.null;
	});
	
	it ('should read sample.txt', function() {
		var nfile = require('../../src/SampleModule/NFile');
		expect(nfile).not.to.be.null;
	})
});