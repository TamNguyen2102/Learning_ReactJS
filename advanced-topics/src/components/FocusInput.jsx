import React, { Component } from "react";
import Input from "./Input";

export class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.CompRef = React.createRef();
  }

  focusHandler = () => {
    this.CompRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.CompRef} />
        <button onClick={this.focusHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
