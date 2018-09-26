# map-indexed-xf

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Macil/map-indexed-xf/blob/master/LICENSE.txt) [![npm version](https://img.shields.io/npm/v/map-indexed-xf.svg?style=flat)](https://www.npmjs.com/package/map-indexed-xf) [![CircleCI Status](https://circleci.com/gh/Macil/map-indexed-xf.svg?style=shield)](https://circleci.com/gh/Macil/map-indexed-xf) [![Greenkeeper badge](https://badges.greenkeeper.io/Macil/map-indexed-xf.svg)](https://greenkeeper.io/)

This module defines a function that returns a transducer which calls a given
function with each value and its index. This transducer may be used with
Javascript transducer libraries such as
[jlongster/transducers.js](https://github.com/jlongster/transducers.js) and
[cognitect-labs/transducers-js](https://github.com/cognitect-labs/transducers-js).

## Example

```js
const t = require('transducers.js');
const mapIndexed = require('map-indexed-xf');

const result = t.toArray([5,6,7], t.compose(
  t.map(x => x*10),
  mapIndexed((x, i) => [i, x])
));

console.log(result); // [[0, 50], [1, 60], [2, 70]]
```

## Types

[TypeScript](https://www.typescriptlang.org/) type definitions for this module
are included! The type definitions won't require any configuration to use.
