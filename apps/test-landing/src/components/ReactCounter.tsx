import React, { useState } from 'react';

export default function ReactCounter() {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <div>
      <button type="button" onClick={subtract}>
        -
      </button>
      <pre>{count}</pre>
      <button type="button" onClick={add}>
        +
      </button>
    </div>
  );
}
