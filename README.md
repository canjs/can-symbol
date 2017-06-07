# can-symbol


A symbol polyfill that also includes additional CanJS-specific symbols, used to detail how to
operate on different objects.

The following are the additional registered CanJS symbols:

- `can.apply(context, args)` - How to call this value as a function
- `can.getKeyDependencies(key)->{}` - Returns observable dependencies for the observable key, null if there are none.
- `can.getKeyDescriptor(key)->{}` - Returns data describing this key's behavior.
- `can.getKeyValue(key)->*` - Returns the value at key.
- `can.getOwnEnumerableKeys()->Array|Iterator` - Returns enumerable keys directly on object.
- `can.getOwnKeyDescriptor(key)->{}` - Returns data describing this key's behavior directly on object.
- `can.getOwnKeys()->Array|Iterator` - Returns all keys directly on object.
- `can.getValue()->*` - Returns the internal value of the object.
- `can.getValueDependencies()->{}` - Returns observable dependencies for the observable value, null if there are none.
- `can.getValueDescriptor()->{}` - Returns data describing this values behavior.


- `can.hasOwnKey(key)->Boolean` - Returns if the object has key.  Like `Object.prototype.hasOwnProperty`.
- `can.isListLike {Boolean}` - If something should be list like
- `can.isMapLike {Boolean}` - If something should be considered map like.
- `can.isMoreListLikeThanMapLike {Boolean}` - If both a map and a list, this idicates how you should iterate through it.
- `can.isValueLike {Boolean}` - If this represents a single value (computes, Kefier streams).
- `can.new(args...)` - Use this value to create a new instance of something.
- `can.offEvent(args...)` - Stop listening to an event.
- `can.offKeyValue(key, callback)` - Stop listening to changes in a key.
- `can.offValue(callback)` - Stop listening to changes in a value.
- `can.onEvent(args...)` - Listen to an event
- `can.onKeyValue(key, callback)` - Listen to when a key changes
- `can.onKeys(callback)` - Listen to when any key changes on this value.
- `can.onKeysAdded( callback(keyToValues[, index]) )` - Listen to when keys are added to this value.
- `can.onKeysRemoved( callback(keysOrValues[, index]) )` - Listen to when keys are removed from this value.
- `can.onValue(callback)` - Listen to when the value changes.
- `can.proto` - The next object in the proto chain.
- `can.setKeyValue(key, value)` - Set a key's value.
- `can.setValue(value)` - Update the value of this value.

- `can.keyHasDependencies()-> Boolean`
- `can.valueHasDependencies() -> Boolean`
## Use

```js
var canSymbol = require("can-symbol");

// Create a symbol --------------------------
var someSymbol = canSymbol("this is my symbol");


// Set a symbol 'property' ------------------
// Assign it to an object as follows if you need to support
// browsers that don't have native Symbols:
var obj = {};
Object.defineProperty(obj, someSymbol,{
	enumerable: false,
	writable: true,
	configurable: true,
	value: "Hi There!"
});

// ... or use  can-operate
var canReflect = require("can-reflect");
canReflect.set(obj, someSymbol, "Hi There!");

// Read a symbol 'property' ----------------
console.log( obj[someSymbol] ) //-> logs "Hi There!"


// Define behavior for can-operate ----------------
canReflect.set(Set.prototype, canSymbol.for("can.getOwnEnumerableKeys"), function(){
	return this.keys();
});
```
