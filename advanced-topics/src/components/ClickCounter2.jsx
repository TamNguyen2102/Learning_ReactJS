import React, { Component } from "react";

export class ClickCounter2 extends Component {
  render() {
    const { count, increment } = this.props;
    return <button onClick={increment}>Click {count}</button>;
  }
}

export default ClickCounter2;
