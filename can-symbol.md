@page can-symbol
@parent can-polyfills
@collection can-infrastructure
@package ./package.json
@group can-symbol/symbols/type Type Symbols
@group can-symbol/symbols/shape Shape Symbols
@group can-symbol/symbols/get-set Get/Set Symbols
@group can-symbol/symbols/call Call Symbols
@group can-symbol/symbols/observe Observe Symbols
@description Symbols used to detail how CanJS may operate on different objects

CanJS has a consistent internal interface for objects to interact with each other, and this is also important for interop
with external libraries.  CanJS uses symbols to identify object types, property access methods, and for event
handling.

`can-symbol` also has a polyfill function that will fake symbols on unsupported platforms.

@signature `canSymbol(String)`

Create or reuse symbols based on an optional string description

@body

```
	var MyIDSymbol = CanSymbol("my_ID");

	// ES5
	var obj = {};
	obj[MyIDSymbol] = 1;

	// ES6 and above
	const obj = {
		[myIDSymbol]: 1
	};
```
