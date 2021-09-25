import React, { useState } from "react";
import HookXY from "./HookXY";

function ToggleDisplay() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle Display
      </button>
      {display && <HookXY />}
    </div>
  );
}

export default ToggleDisplay;
