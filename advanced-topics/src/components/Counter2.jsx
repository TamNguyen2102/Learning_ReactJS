import React, { Component } from "react";

export class Counter2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  incrementHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementHandler)}</div>
    );
  }
}

export default Counter2;
