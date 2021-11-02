import { useState } from "react";

const foo = {
  bar: 1,
  foobar: 2,
  barfoo: 3,
};

const foo2 = {
  ...foo,
  soap: 1,
  shampoo: 4,
  bar: 2,
};
console.log(foo);
console.log(foo2);

import React from "react";
const Lists = () => {
  const [list, setLists] = useState({});
  return (
    <div>
      <h3>Current List:</h3>
      <button onClick={() => setLists(foo)}>Foo List</button>
      <button onClick={() => setLists(foo2)}>Foo2 List</button>

      <ul>
        {Object.keys(list).map((stuff) => (
          <li key={stuff}>
            {stuff}: {list[stuff]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
