@typedef {function(function(*))} can-symbol/symbols/onEmit can.onEmit
@parent can-symbol/symbols/observe
@description Defines how observables can listen to the object's value whenever it is emitted.

@signature `@@can.onEmit( handler(newValue) )`

The `@@@@can.onEmit` symbol points to a function that registers 
 `handler` to be called back with the new value of the object when it
 is emitted.  

```
var obj = function(value) {
	if(arguments.length >= 1) {
		obj.currentValue = value;
		obj.handlers.forEach(function(handler){
			handler.call(obj, value);
		});
	} else {
		return obj.currentValue;
	}
};

obj[canSymbol.for("can.onEmit")] = function(handler){
	if(!obj.handlers) {
		obj.handlers = [];
	}
	obj.handlers.push(handler);
}
```

@this {*} any object with a mutable value
@param {function(this:*, *)} handler(newValue) The handler must be called back with `this` as the instance of the observable. 
