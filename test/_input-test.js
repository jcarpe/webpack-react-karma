var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');

var InputField = require('../src/components/input-field/input-field.jsx');

describe('InputField', function () {
	it( 'renders', function () {
		var field = TestUtils.renderIntoDocument( <InputField/> );
		expect( field ).toExist();
	});
});