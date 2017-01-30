# MapIndexedXf

This module defines a function that returns a transducer which calls a given
function with each value and its index. This transducer may be used with
Javascript transducer libraries such as
[jlongster/transducers.js](https://github.com/jlongster/transducers.js) and
[cognitect-labs/transducers-js](https://github.com/cognitect-labs/transducers-js).

## Example

```js

const t = require('transducers.js');
const mapIndexed = require('mapindexedxf');

const result = t.toArray([5,6,7], t.compose(
  t.map(x => x*10),
  mapIndexed((x, i) => [i, x])
));

console.log(result); // [[0, 50], [1, 60], [2, 70]]
```
