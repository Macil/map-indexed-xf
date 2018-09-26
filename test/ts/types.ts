// This file isn't executed. Typescript just checks it for type safety.

import * as t from 'transducers.js';

import mapIndexed from '../..';

function foo() {
  const xf: t.Transducer<Date, string> = mapIndexed((x: Date, i: number) => `${x}:${i}`);
}
