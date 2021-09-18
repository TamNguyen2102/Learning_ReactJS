import React, { Component } from "react";

export class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputRef);
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} placeholder="Input" />
      </div>
    );
  }
}

export default Input;
