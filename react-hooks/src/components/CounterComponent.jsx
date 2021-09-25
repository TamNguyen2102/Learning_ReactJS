import React from "react";
import { useCount, useDispatchCount } from "./ReducerContext";

function CounterComponent() {
  const count = useCount();
  const dispatchCount = useDispatchCount();

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatchCount("increment")}>Increment</button>
      <button onClick={() => dispatchCount("decrement")}>Decrement</button>
      <button onClick={() => dispatchCount("reset")}>Reset</button>
    </div>
  );
}

export default CounterComponent;
