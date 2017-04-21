@property {Symbol, Function} can-symbol/symbols/new can.new
@parent can-symbol/symbols/call
@description A symbol placed on a constructor to reference a function that creates a new instance of the constructor.

@signature `Example` `obj[canSymbol('can.new')] = function() { return new this(); };`

Calling this function as a constructor will construct an instance as normal, but remove any arguments.

@signature `Non-standard Example` `obj[canSymbol('can.new')] = function(params) { return Object.create(this.prototype, params); };`

Calling this function as a constructor will work even if the object it is applied to is not a callable function.
