import assert from 'assert';
import t from 'transducers.js';
import mapIndexed from '../src';

describe('mapIndexed', function() {
  it('works', function() {
    const result = t.toArray([5,6,7], t.compose(
      t.map(x => x*10),
      mapIndexed((x, i) => [i, x]),
      t.map(([i, x]) => [i, x+1])
    ));
    assert.deepStrictEqual(result, [
      [0, 51], [1, 61], [2, 71]
    ]);
  });
});
