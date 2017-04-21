@typedef {Symbol} can-symbol/symbols/isValueLike can.isValueLike
@parent can-symbol/symbols/type
@description A symbol placed on an object to confirm that it is usable like an atomic value (a number, string, boolean, or undefined value).

@signature `Example` `obj[canSymbol('can.isValueLike')] = false`

Shows that this object cannot be used as an atomic value, perhaps because it does not implement `valueOf()`.
