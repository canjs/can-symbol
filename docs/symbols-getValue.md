@property {Symbol, Function} can-symbol/symbols/getValue can.getValue
@parent can-symbol/symbols/get-set
@description A symbol placed on an object to reference a function that returns the object's value.  Value may mean different things in different contexts; e.g. a `can-compute`'s value is the value stored internally to the compute, while an observable object's value may be a non-observable, serialized representation of its properties.

@signature `DefineMap-like Example` `obj[canSymbol('can.getValue')] = obj.get;`

Calling this getter function will return a non-observable representation of the object's values.

@signature `Compute-like Example` `obj[canSymbol('can.getValue')] = obj._internalCompute.get.bind(obj._internalCompute);`

Calling this getter function will return the compute's value.
