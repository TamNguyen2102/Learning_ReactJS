import React, { Component } from "react";

class Class extends Component {
  constructor() {
    super();
    this.state = { message: "Steve is captured!" };
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <button
          onClick={() => {
            this.setState({
              message: "Wonder Woman block the bullet, Steve is safe now!",
            });
          }}
        >
          Save Steve
        </button>
      </div>
    );
  }
}

export default Class;
