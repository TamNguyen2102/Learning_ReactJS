import React, { Component } from "react";
import { ContextConsumer } from "./userContext";

export class ComponentB extends Component {
  render() {
    return (
      <ContextConsumer>
        {(name) => {
          return (
            <div>
              <h1>Component B</h1>
              <h2>Hello {name}</h2>
            </div>
          );
        }}
      </ContextConsumer>
    );
  }
}

export default ComponentB;
