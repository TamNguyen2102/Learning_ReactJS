import React, { Component } from "react";

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: true,
    };
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser = () => {
    this.setState(
      () => {
        return {
          isLogged: false,
        };
      },
      () => console.log(this)
    );
  };

  render() {
    // Method 4
    let message;
    if (this.state.isLogged) {
      message = <h1>Hello Tam Nguyen</h1>;
    } else {
      message = <h1>Hello User</h1>;
    }

    return (
      <div>
        {message}
        <button onClick={this.changeUser}>Change User</button>
      </div>
    );
    // //   Method 3
    // const message = <h1>Hello Tam Nguyen</h1>;
    // return this.state.isLogged && message;

    // // Method 2
    // return this.state.isLogged ? (
    //   <h1>Hello Tam Nguyen </h1>
    // ) : (
    //   <h1>Welcome User!</h1>
    // );

    // //Method 1
    // if (this.state.isLogged) {
    //   return <h1>Hello Tam Nguyen</h1>;
    // } else {
    //   return <h1>Welcome User!</h1>;
    // }
  }
}

export default ConditionalRendering;
