@typedef {function(String)} can-symbol/symbols/keyHasDependencies can.keyHasDependencies
@parent can-symbol/symbols/observe
@description Return true if there are any other events or property changes that will trigger an event for the key on the object.

@signature `@@can.keyHasDependencies(key)`

Check if there are any other bindings that affect the property referenced by the string `key`.

@this {MapLike} any map-like object with named properties
@param {String} key the key to check for dependent bindings
@return {Boolean} true if there are any other bindings that this keyed propertey depends on

```
var someOtherObj;
var obj = {
	__bindEvents: {
		foo: [{ 
			handler: function() {},
			reads: [{ object: someOtherObj, key: "bar" }]
		}]
	}
};

obj[canSymbol.for("keyHasDependencies")] = function(key) {
	return this.__bindEvents[key] && 
		this.__bindEvents[key].filter(function(binding) {
			return binding.reads && binding.reads.length > 0;
		}).length > 0;
};
```
