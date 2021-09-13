import React from "react";

const Greeting = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.hero}
      </h1>
      {props.children}
    </div>
  );

  // Without JSX

  //   return React.createElement(
  //     "div",
  //     { className: "greeting" },
  //     React.createElement("h1", null, "Hello JSX")
  //   );
};

export default Greeting;
