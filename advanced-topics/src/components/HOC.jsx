import React, { Component } from "react";

const HighOrderComponent = (WrappedComponent) => {
  class EnhancedComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return EnhancedComponent;
};

export default HighOrderComponent;
