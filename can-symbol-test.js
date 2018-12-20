var QUnit = require('steal-qunit');
var canSymbol = require('can-symbol');
var clone = require('steal-clone');

QUnit.module('can-symbol');

QUnit.test('for and keyFor', function(){
	var symbol = canSymbol.for("abc");
	QUnit.ok( canSymbol.for("abc") === canSymbol.for("abc") );

	QUnit.equal(canSymbol.keyFor(symbol), "abc", "key for");

});

QUnit.test("can get/set symbols", function(){

	var obj = {};

	var symbol1 = canSymbol("prop1"),
		symbol2 = canSymbol("prop2");

	obj[symbol1] = "VALUE";

	QUnit.equal(obj[symbol1], "VALUE", "got value");

	Object.defineProperty(obj, symbol2,{
		value: "DP-VALUE"
	});

	QUnit.equal(obj[symbol2], "DP-VALUE", "got define property value");

});

QUnit.test("isSymbolLike with polyfill", function(assert) {
	var done = assert.async();
	var origSymbol = window.Symbol;
	function FakeSymbol(key) {
		return { key: key };
	}
	FakeSymbol.for = function() {};
	window.Symbol = FakeSymbol;

	var loader = clone({});

	loader.import("can-symbol")
		.then(function(canSymbol) {
			QUnit.notEqual(canSymbol, FakeSymbol, "uses OUR polyfill");
			window.Symbol = origSymbol;
			done();
		});
});
