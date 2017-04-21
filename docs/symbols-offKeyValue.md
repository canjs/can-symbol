@property {Symbol, Function} can-symbol/symbols/offKeyValue can.offKeyValue
@parent can-symbol/symbols/observe
@description A symbol placed on a constructor to reference a function used to stop listening to changes on a specific named property.

@signature `Example` `obj[canSymbol('can.offKeyValue')] = function(key, fn) { this.removeEventListener(key, fn) };`

Calling this function will remove an existing listener on the object, which was previously bound to the key value using `addEventListener()`.
