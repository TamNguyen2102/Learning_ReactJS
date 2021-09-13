import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";
import PureComp from "./PureComp";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "A",
    };
    console.log(`${this.state.name}: constructor`);
    this.changeState = this.changeState.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`${state.name}: getDerivedStateFromProps`);
    return null;
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    console.log(`${this.state.name}: DidMount`);
  }

  changeState = () => {
    this.setState({
      name: "C",
    });
  };

  render() {
    console.log(`${this.state.name}: render`);
    return (
      <React.Fragment>
        <div>Life Cycle {this.state.name}</div>
        <button onClick={this.changeState}>Change State</button>
        <PureComp />
      </React.Fragment>
    );
  }
}

export default LifeCycleA;
