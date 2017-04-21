@property {Symbol, Function} can-symbol/symbols/onKeyValue can.onKeyValue
@parent can-symbol/symbols/observe
@description A symbol placed on a constructor to reference a function used to listen to changes on a specific named property.

@signature `Example` `obj[canSymbol('can.onKeyValue')] = function(key, fn) { this.addEventListener(key, fn) };`

Calling this function will set up a listener on the object.
