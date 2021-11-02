const foo = {
  bar: 1,
  foobar: 2,
  barfoo: 3
};

const foo2 = {
  ...foo,
  soap: 1,
  shampoo: 4
};
console.log(foo);
console.log(foo2);
