import React, { Component } from "react";
import EnhancedComponent from "./withCounter";
export class HoverCounter extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <h2 onMouseOver={increment}>Hover {count} times</h2>
      </div>
    );
  }
}

export default EnhancedComponent(HoverCounter);
