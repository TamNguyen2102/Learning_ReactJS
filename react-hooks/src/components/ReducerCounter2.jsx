import React, { useReducer } from "react";

const initialState = {
  firtCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firtCounter: state.firtCounter + action.step };
    case "decrement":
      return { ...state, firtCounter: state.firtCounter - action.step };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.step };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.step };
    case "reset":
      return initialState;
  }
};

function ReducerCounter2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>First Counter : {count.firtCounter}</h2>
      <h2>Second Counter : {count.secondCounter}</h2>
      <div>
        <button onClick={() => dispatch({ type: "increment", step: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", step: 1 })}>
          Decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "increment2", step: 5 })}>
          Increment2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", step: 5 })}>
          Decrement2
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default ReducerCounter2;
