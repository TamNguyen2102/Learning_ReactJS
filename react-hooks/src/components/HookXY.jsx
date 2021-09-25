import React, { useState, useEffect } from "react";

function HookXY() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const changePosition = (e) => {
    console.log("Position changed");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Useffect - on display");
    window.addEventListener("mousemove", changePosition);
    return () => {
      console.log("Component unmounting");
      window.removeEventListener("mousemove", changePosition);
    };
  }, []);

  return (
    <div>
      <div>{`[X-${x};Y-${y}]`}</div>
    </div>
  );
}

export default HookXY;
