@property {Symbol, Function} can-symbol/symbols/getOwnKeyDescriptor can.getOwnKeyDescriptor
@parent can-symbol/symbols/shape
@description A symbol placed on an object to describe the attributes of its own keyed properties.

@signature `Shapeless object example` `obj[canSymbol('can.getOwnKeyDescriptor')] = function() { return {}; }`

This object is shapeless.  It does not have any enumerable keys.

@signature `Normal object example` `obj[canSymbol('can.getOwnKeys')] = Object.getOwnPropertyDescriptor.bind(Object, obj);`

This is a normal object with no special key behaviors.

