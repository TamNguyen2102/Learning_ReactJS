import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Joker is destroying Gotham!",
    };
    this.saveCity = this.saveCity.bind(this);
  }

  saveCity(childName) {
    this.setState(() => {
      return {
        message: `${childName} will be saved tonight!`,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <ChildComponent eventHandler={this.saveCity} />
      </div>
    );
  }
}

export default ParentComponent;
