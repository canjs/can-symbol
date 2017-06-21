var namespace = require("can-namespace");

var CanSymbol;
if(typeof Symbol !== "undefined" && typeof Symbol.for === "function") {
	CanSymbol = Symbol;
} else {

	var symbolNum = 0;
	CanSymbol = function CanSymbolPolyfill(description){
		var symbolValue = "@@symbol"+(symbolNum++)+(description);

		var symbol = {}; // make it object type

		Object.defineProperties(symbol, {
			toString: {
				value: function(){
					return symbolValue;
				}
			}
		});

		return symbol;
	};

	var descriptionToSymbol = {};
	var symbolToDescription = {};

	/**
	 * @function can-symbol.for for
	 * @parent  can-symbol
	 * @description  Get a symbol based on a known string identifier, or create it if it doesn't exist.
	 *
	 * @signature `canSymbol.for(String)`
	 *
	 * @param { String } description  The string value of the symbol
	 * @return { CanSymbol } The globally unique and consistent symbol with the given string value.
	 */
	CanSymbol.for = function(description){
		var symbol = descriptionToSymbol[description];
		if(!symbol) {
			symbol = descriptionToSymbol[description] = CanSymbol(description);
			symbolToDescription[symbol] = description;
		}
		return symbol;
	};
	/**
	 * @function can-symbol.keyFor keyFor
	 * @parent  can-symbol
	 * @description  Get the description for a symbol.
	 *
	 * @signature `canSymbol.keyFor(CanSymbol)`
	 *
	 * @param { String } description  The string value of the symbol
	 * @return { CanSymbol } The globally unique and consistent symbol with the given string value.
	 */
	CanSymbol.keyFor = function(symbol) {
		return symbolToDescription[symbol];
	};
	["hasInstance","isConcatSpreadable",
		"iterator","match","prototype","replace","search","species","split",
	"toPrimitive","toStringTag","unscopables"].forEach(function(name){
		CanSymbol[name] = CanSymbol.for(name);
	});
}

// Generate can. symbols.
[
	// ======= Type detection ==========
	"isMapLike",
	"isListLike",
	"isValueLike",
	"isFunctionLike",
	// ======= Shape detection =========
	"getOwnKeys",
	"getOwnKeyDescriptor",
	// "getValueDescriptor",
	"proto",
	//optional
	"getOwnEnumerableKeys",
	"hasOwnKey",
	// ======= GET / SET
	"getValue",
	"setValue",
	"getKeyValue",
	"setKeyValue",
	// ======= Call =========
	"apply",
	"new",
	// ======= Observe =========
	"onValue",
	"offValue",
	"onKeyValue",
	"offKeyValue",
	"getKeyDependencies",
	"getValueDependencies",
	"keyHasDependencies",
	"valueHasDependencies",
	"onKeys",
	"onKeysAdded",
	"onKeysRemoved"
	].forEach(function(name){
	CanSymbol.for("can."+name);
});

module.exports = namespace.Symbol = CanSymbol;
