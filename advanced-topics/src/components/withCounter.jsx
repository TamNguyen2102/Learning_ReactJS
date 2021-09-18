import React, { Component } from "react";

function withCounter(WrappedComponent) {
  class EnhancedComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementHandler = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      const { count } = this.state;
      return (
        <WrappedComponent count={count} increment={this.incrementHandler} />
      );
    }
  }
  return EnhancedComponent;
}

export default withCounter;
