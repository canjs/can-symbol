@property {Symbol, Object} can-symbol/symbols/proto can.proto
@parent can-symbol/symbols/shape
@description A symbol placed on an object to reference its prototype.  Since the non-standard \_\_proto\_\_ is deprecated, this can serve as a prototype chain reference without invoking `Object.getOwnProperty()` every time.

@signature `Example` `obj[canSymbol('can.proto')] = Object.getOwnProperty(obj);`

This object's prototype can be accessed normally.
