import React, { Component } from "react";
import FowardRefs from "./FowardRefs";

export class ParentInput extends Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
  }

  clickHandler = () => {
    this.parentRef.current.focus();
    console.log(this.parentRef.current.value);
  };

  render() {
    return (
      <div>
        <FowardRefs ref={this.parentRef} />
        <button onClick={this.clickHandler}>Click to hover</button>
      </div>
    );
  }
}

export default ParentInput;
