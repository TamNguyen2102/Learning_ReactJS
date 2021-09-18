import React from "react";

const UserContext = React.createContext();

const ContextProvider = UserContext.Provider;
const ContextConsumer = UserContext.Consumer;

export { ContextProvider, ContextConsumer };
