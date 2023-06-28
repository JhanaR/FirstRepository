import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}> Plus</button>
      <h1> Timer - {count}</h1>
      <button onClick={() => setCount(count - 1)}> Minus </button>
    </>
  );
}

export default Counter;
