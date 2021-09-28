import React from "react";
import useCount from "../hooks/useCount";

function SetCount() {
  const [count, increment, decrement, reset] = useCount(10, 5);

  return (
    <div>
      <span> Count 2: {count}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default SetCount;
