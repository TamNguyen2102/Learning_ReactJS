import React, { Component } from "react";

export class ClassCounter extends Component {
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

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
    console.log("Mounting: " + this.state.count);
  }

  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
    console.log("Updated: " + this.state.count);
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementHandler}>Click {count} times</button>
      </div>
    );
  }
}

export default ClassCounter;
