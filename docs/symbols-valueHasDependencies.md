@typedef {function()} can-symbol/symbols/valueHasDependencies can.valueHasDependencies
@parent can-symbol/symbols/observe
@description Define a function to return true if there are any other events or property changes that will trigger an event for the value on the object.

@signature `@@can.valueHasDependencies()`

The `@@can.valueHasDependencies` symbol on an object points to a function that checks if there are any other bindings that affect the value of the object.


```
var someOtherObj;
var internalValue;
function computed(value) {
	if(arguments.length >= 1) {
		internalValue = value;
		obj.__bindEvents.forEach(function(handler) {
			handler.call(this, value);
		});
	} else {
		return internalValue;
	}
}
obj.__bindEvents = [{ 
	handler: function() {},
	reads: [{ object: someOtherObj }]
}];

obj[canSymbol.for("valueHasDependencies")] = function() {
	return this.__bindEvents && 
		this.__bindEvents.filter(function(binding) {
			return binding.reads && binding.reads.length > 0;
		}).length > 0;
};
```

@this {*} any value-like object
@return {Boolean} true if there are any other bindings that the object's value depends on
