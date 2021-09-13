import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState(
      (prevState, props) => {
        return {
          counter: prevState.counter + 1,
        };
      },
      () => console.log("Callback value:" + this.state.counter)
    );
    console.log(this.state.counter);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
