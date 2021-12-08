@typedef {Boolean} can-symbol/symbols/isScopeLike can.isScopeLike
@parent can-symbol/symbols/type
@description Set to `true` to show that an object is usable like a can.view.Scope for providing data to rendered views

@signature `@@can.isScopeLike = true`

Shows that this object can be used to provide the API for rendering a view with data, like a [can-view-scope Scope].  Scopes have a context, optional parent, metadata, and the prototype functions `add()`, `get()`, `find()`, `set()`, `peek()`, and `compute()`.
