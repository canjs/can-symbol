@property {Symbol, Function} can-symbol/symbols/setValue can.setValue
@parent can-symbol/symbols/get-set
@description A symbol placed on an object to reference a function that sets the object's value.  Value may mean different things in different contexts; e.g. setting a `can-compute`'s value updates the value stored internally to the compute, while setting an observable object's value will update all of the same-keyed properties of the object argument.

@signature `DefineMap-like Example` `obj[canSymbol('can.setValue')] = function(val) { this.set(val); };`

Calling this setter function with an object will update the map's properties to match those of the object.

@signature `Compute-like Example` `obj[canSymbol('can.setValue')] = function(val) { this._internalCompute.set(val); }`

Calling this setter function will update the compute's value.

