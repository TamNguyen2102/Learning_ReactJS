import React, { Component } from "react";

export class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "B",
    };
    console.log(`${this.state.name}: constructor`);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`${state.name}: getDerivedStateFromProps`);
    return null;
  }

  componentDidMount() {
    console.log(`${this.state.name}: DidMount`);
  }

  render() {
    console.log(`${this.state.name}: render`);
    return <div>Life Cycle B</div>;
  }
}

export default LifeCycleB;
