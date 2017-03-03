# can-symbol

[![Build Status](https://travis-ci.org/canjs/can-symbol.png?branch=master)](https://travis-ci.org/canjs/can-symbol)

Well known symbols used to detail how to operate on different objects

## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'can-symbol';
```

### CommonJS use

Use `require` to load `can-symbol` and everything else
needed to create a template that uses `can-symbol`:

```js
var plugin = require("can-symbol");
```

## AMD use

Configure the `can` and `jquery` paths and the `can-symbol` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'can-symbol',
		    	location: 'node_modules/can-symbol/dist/amd',
		    	main: 'lib/can-symbol'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/can-symbol/dist/global/can-symbol.js'></script>
```
