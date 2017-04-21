@property {Symbol, Function} can-symbol/symbols/setKeyValue can.setKeyValue
@parent can-symbol/symbols/get-set
@description A symbol placed on an object to reference a function that sets the value of one of the object's properties.  This is only applicable to objects where keyed properties are relevant (like maps);

@signature `DefineMap-like Example` `obj[canSymbol('can.setKeyValue')] = function(key, val) { this[key] = val; };`

Calling this setter function with an object will update one of the map's properties to match those of the object.
