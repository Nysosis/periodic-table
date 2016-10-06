Periodic Table
===

This package is a wrapper for a dataset of periodic elements. These elements were taken from a modified [Penn State CS class](http://php.scripts.psu.edu/djh300/cmpsc221/p3s11-pt-data.htm) CSV file, transformed into JSON, and then wrapped in some pretty JavaScript accessors.  

```bash
npm install periodic-table
```

## Usage

### JavaScript

```js
var pt = require('periodic-table');

// entire dataset
var allElements = pt.all();

// single elements by name
var he = pt.elements.Helium;

// single elements by symbol
var he = pt.symbols.He;

// single elements by atomic number
var he = pt.numbers[2];

var util = require('periodic-table/lib/util');

// atomic mass of molecule
// atomicMass("[Element][Number] [Element][Number] ...")
// parenthesis around elements not supported..yet
var waterMass = util.atomicMass("H2 O");
var organicMass = util.atomicMass("C12 H22 O11");
```

### TypeScript

```ts
import * as pt from "periodic-table";

// entire dataset
let allElements = pt.all();

// single elements by name
let he = pt.elements['Helium'];

// single elements by symbol
let he = pt.symbols['He'];

// single elements by atomic number
let he = pt.numbers[2];

import * as util from 'periodic-table/src/util';

// atomic mass of molecule
// atomicMass("[Element][Number] [Element][Number] ...")
// parenthesis around elements not supported..yet
let waterMass = util.atomicMass("H2 O");
let organicMass = util.atomicMass("C12 H22 O11");
```

## Sample data

```js
{ atomicNumber: 1,
  symbol: 'H',
  name: 'Hydrogen',
  atomicMass: '1.00794(4)',
  cpkHexColor: 'FFFFFF',
  electronicConfiguration: '1s1',
  electronegativity: 2.2,
  atomicRadius: 37,
  ionRadius: '',
  vanDelWaalsRadius: 120,
  ionizationEnergy: 1312,
  electronAffinity: -73,
  oxidationStates: '-1, 1',
  standardState: 'gas',
  bondingType: 'diatomic',
  meltingPoint: 14,
  boilingPoint: 20,
  density: 0.0899,
  groupBlock: 'nonmetal',
  yearDiscovered: 1766 
}
```

## Contributing

Is any table information wrong? Does some field need to be added or better formatted? Is there a more reliable source of information to work with? Open an issue or be even cooler and open a pull-request.

### Building

To build a new version of the package files, just run the build command:

```bash
npm run build
```

This will generate a new set of files in the `./lib` directory, transpiled from the files in `./src`.

If any update happens to the csv file, you can regenerate the json file by running:

```bash
npm run csvtojson
```

### Testing

To run the tests, simply use:

```bash
npm run test
```

Follow me on [Twitter](https://twitter.com/compooter) for updates or just for the lolz and please check out my other [repositories](https://github.com/andrejewski) if I have earned it. I thank you for reading.
