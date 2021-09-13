import React, { Component } from "react";

export class BasicFormHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      number: 1,

      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    };

    this.changeHandle = this.changeHandle.bind(this);
    this.changeNumberHandle = this.changeNumberHandle.bind(this);
    this.submitHandling = this.submitHandling.bind(this);
  }
  changeHandle(event) {
    this.setState({
      value: event.target.value,
    });
  }

  changeNumberHandle(event) {
    this.setState({
      number: event.target.value,
    });
  }

  submitHandling(event) {
    alert(`Text: ${this.state.value}, number: ${this.state.number}`);
    event.preventDefault();
  }

  render() {
    return (
      <div style={this.state.style}>
        <form>
          <div>
            <label htmlFor="">Text</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.changeHandle}
            />
          </div>
          <div>
            <label htmlFor="">Number</label>
            <input
              type="number"
              value={this.state.number}
              onChange={this.changeNumberHandle}
            />
          </div>
          <button type="submit" onClick={this.submitHandling}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default BasicFormHandling;
