@property {Symbol, Function} can-symbol/symbols/apply can.apply
@parent can-symbol/symbols/call
@description A symbol placed on an callable object to reference a function that applies a List-like as arguments to a call of the function.

@signature `Example` `obj[canSymbol('can.apply')] = function(ctx, list) { return this.apply(ctx, list); };`

Calling this apply function will work like a normal object.

@signature `Example` `obj[canSymbol('can.apply')] = function(ctx, list) { return this.apply(ctx, deepAssign([], list)); };`

Calling this apply function will not mutate any argument passed in, since it operates on a deep copy of the applied list.
