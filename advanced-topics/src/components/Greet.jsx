import React, { Component } from "react";
import HighOrderComponent from "./HOC";

export class Greet extends Component {
  render() {
    const { name } = this.props;
    return <div>Hello {name}</div>;
  }
}

export default HighOrderComponent(Greet);
