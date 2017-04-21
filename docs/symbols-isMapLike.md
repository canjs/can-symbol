@typedef {Symbol} can-symbol/symbols/isMapLike can.isMapLike
@parent can-symbol/symbols/type
@description A symbol placed on an object to confirm that it is usable like an object with named properties.

@signature `Example` `obj[canSymbol('can.isMapLike')] = true`

Shows that this object can be used with named properties, like a [can-define/map/map DefineMap].
