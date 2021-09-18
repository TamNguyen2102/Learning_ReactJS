import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    console.log(errorInfo.componentStack);
    console.log(error.toString());
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>Joker is a villain</h2>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
