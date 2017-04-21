@property {Symbol, Function} can-symbol/symbols/hasOwnKey can.hasOwnKey
@parent can-symbol/symbols/shape
@description A symbol placed on an object to reference a function that determines key membership.

@signature `Example` `obj[canSymbol('can.hasOwnKey')] = function(key) { return Object.keys(this).indexOf(key) > -1; }`

This object uses all keys, enumerable or not, to determine key membership.
