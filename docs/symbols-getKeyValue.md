@property {Symbol, Function} can-symbol/symbols/getKeyValue can.getKeyValue
@parent can-symbol/symbols/get-set
@description A symbol placed on an object to reference a function that returns the value of one of the object's properties.  

@signature `Example` `obj[canSymbol('can.getKeyValue')] = function(key) { return this[key]; };`

Calling this getter function will return the value of the object's property with the supplied key.
