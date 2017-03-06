var CanSymbol;
if(typeof Symbol !== "undefined") {
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
	CanSymbol.for = function(description){
		var symbol = descriptionToSymbol[description];
		if(!symbol) {
			symbol = descriptionToSymbol[description] = CanSymbol(description);
			symbolToDescription[symbol] = description;
		}
		return symbol;
	};
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
	"onKeys",
	"onKeysAdded",
	"onKeysRemoved"
	].forEach(function(name){
	CanSymbol.for("can."+name);
});



module.exports = CanSymbol;
