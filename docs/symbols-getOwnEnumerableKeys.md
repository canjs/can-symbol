@property {Symbol, Function} can-symbol/symbols/getOwnEnumerableKeys can.getOwnEnumerableKeys
@parent can-symbol/symbols/shape
@description A symbol placed on an object to list what enumerable keys (as defined by its property descriptor) it has of its own (not from property defs or prototypes).

@signature `Shapeless object example` `obj[canSymbol('can.getOwnEnumerableKeys')] = function() { return []; }`

This object is shapeless.  It does not have any enumerable keys.

@signature `Normal object example` `obj[canSymbol('can.getOwnEnumerableKeys')] = function() { return Object.getOwnPropertyKeys(this).filter(function(key) { return Object.getOwnPropertyDescriptor(this, key).enumerable });`

This is a normal object with no special key behaviors.
