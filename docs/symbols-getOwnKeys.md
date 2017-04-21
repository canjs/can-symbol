@property {Symbol, Function} can-symbol/symbols/getOwnKeys can.getOwnKeys
@parent can-symbol/symbols/shape
@description A symbol placed on an object to list what keys it has of its own (not from property defs or prototypes).

@signature `Shapeless object example` `obj[canSymbol('can.getOwnKeys')] = function() { return []; }`

This object is shapeless.  It does not have any enumerable keys.

@signature `Normal object example` `obj[canSymbol('can.getOwnKeys')] = Object.getOwnPropertyKeys.bind(Object, obj);`

This is a normal object with no special key behaviors.
