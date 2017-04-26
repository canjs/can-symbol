@typedef {Boolean} can-symbol/symbols/isValueLike can.isValueLike
@parent can-symbol/symbols/type
@description Set to `true` to show than an object is usable like an atomic value (a number, string, boolean, or undefined value).

@signature `@@can.isValueLike = true`

Shows that this object can be used as an atomic value; it may make sense to also implement `valueOf()` and [can-symbol/symbols/getValue `@@@can.getValue()`]
