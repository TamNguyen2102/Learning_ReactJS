import React, { Component } from "react";

export class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };

    this.alertValue = this.alertValue.bind(this);
  }

  componentDidMount() {
    this.ref.current.focus();
    console.log(this.ref);
  }

  alertValue() {
    alert(
      `This is ref value: ${this.ref.current.value}, this is cb ref value: ${this.cbRef.value}`
    );
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.ref} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.alertValue}>Alert Value</button>
      </div>
    );
  }
}

export default RefDemo;
