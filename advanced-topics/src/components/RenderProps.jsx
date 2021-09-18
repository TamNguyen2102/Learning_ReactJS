import React, { Component } from "react";

export class RenderProps extends Component {
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
    const { count } = this.state;
    return <div>{this.props.render(count, this.incrementHandler)}</div>;
  }
}

export default RenderProps;
