import React, { createContext, useContext, useReducer } from "react";

const CountContext = createContext();
const DispatchCountContext = createContext();

export function useCount() {
  return useContext(CountContext);
}
export function useDispatchCount() {
  return useContext(DispatchCountContext);
}

function CounterProvider({ children }) {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return initialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={count}>
      <DispatchCountContext.Provider value={dispatch}>
        {children}
      </DispatchCountContext.Provider>
    </CountContext.Provider>
  );
}

export default CounterProvider;
