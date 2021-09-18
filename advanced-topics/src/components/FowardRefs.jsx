import React from "react";

const FowardComp = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <input type="text" ref={ref} />
    </React.Fragment>
  );
});

export default FowardComp;
