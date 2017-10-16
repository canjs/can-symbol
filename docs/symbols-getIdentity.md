@typedef {Boolean} can-symbol/symbols/getIdentity can.getIdentity
@parent can-symbol/symbols/shape

@description Returns a string representation of what the object is.

@signature `@@can.getIdentity()`

The `@@@@can.getIdentity` symbol points to a function that returns a string 
representation of what the object is.


```js
var foo = function() {};

foo[canSymbol.for("can.getIdentity")] = function() {
	return "MyFooFunction";
};

obj[canSymbol.for("can.getIdentity")]() //-> "MyFooFunction"
```

@return {String} The identity representation as a string
