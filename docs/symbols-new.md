@property {function(...)} can-symbol/symbols/new can.new
@parent can-symbol/symbols/call
@description Create a new instance of a constructor function or prototype object.

@signature `@@can.new(arg, ...)`

Pass the arguments to a construction of an object, with a prototype chain based on this constructor's prototype, or itself if not a constructor.

@this {*} A callable constructor or a prototype object.
@param {*} arg pass any number of parameters of any type
@return {Object} A new instance of the type.

```
function constructor() {}
constructor.prototype = { foo: "bar" };

// ES6 rest and spread params used below to be concise.
constructor[canSymbol.for("new")] = function(...args) {
	return new this(...args);
};

var prototype = { baz: "quux" };
prototype[canSymbol.for("new")] = function(props) {
	return Object.create(this, props);
};
```
