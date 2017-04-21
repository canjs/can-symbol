@property {Symbol, Function} can-symbol/symbols/onKeysRemoved can.onKeysRemoved
@parent can-symbol/symbols/observe
@description A symbol placed on a constructor to reference a function used to listen to when there are removals from the object's key set (as from `delete`).

@signature `Example` `obj[canSymbol('can.onKeysRemoved')] = /* TODO we don't know what this looks like yet. */;`

Calling this function will set up a listener for keys removed.

