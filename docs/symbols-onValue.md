@property {Symbol, Function} can-symbol/symbols/onValue can.onValue
@parent can-symbol/symbols/observe
@description A symbol placed on a constructor to reference a function used to listen to when the object's value changes.

@signature `Example` `obj[canSymbol('can.onValue')] = function(fn) { this.addEventListener("change", fn) };`

Calling this function will set up a listener on the object.
