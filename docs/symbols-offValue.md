@property {Symbol, Function} can-symbol/symbols/offValue can.offValue
@parent can-symbol/symbols/observe
@description A symbol placed on a constructor to reference a function used to stop listening to changes in an object's value.

@signature `Example` `obj[canSymbol('can.offValue')] = function(fn) { this.removeEventListener("change", fn) };`

Calling this function will remove a previous listener on the object if it was hooked into the object's "change" event.  This is appropriate for CanJs maps and computes.
