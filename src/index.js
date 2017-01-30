class MapIndexed {
  constructor(f, xform) {
    this.f = f;
    this.xform = xform;
    this.i = -1;
  }

  '@@transducer/init'() {
    return this.xform['@@transducer/init']();
  }

  '@@transducer/result'(v) {
    return this.xform['@@transducer/result'](v);
  }

  '@@transducer/step'(res, input) {
    this.i++;
    return this.xform['@@transducer/step'](res, this.f(input, this.i));
  }
}

export default function mapIndexed(f) {
  return function(xform) {
    return new MapIndexed(f, xform);
  };
}
