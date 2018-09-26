import {Transducer} from 'transducers.js';

export default function mapIndexed<TInput, TOutput>(
  f: (x: TInput, i: number) => TOutput
): Transducer<TInput, TOutput>;
