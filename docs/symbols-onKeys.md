@property {Symbol, Function} can-symbol/symbols/onKeys can.onKeys
@parent can-symbol/symbols/observe
@description A symbol placed on a constructor to reference a function used to listen to when the object's key set changes.

@signature `Example` `obj[canSymbol('can.onKeys')] = function(fn) { this.addEventListener("__keys", fn) };`

Calling this function will set up a listener on a DefineMap-like object.
