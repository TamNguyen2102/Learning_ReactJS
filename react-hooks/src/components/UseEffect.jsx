import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [name, changeName] = useState("");

  useEffect(() => {
    console.log("useEffect - changed");
    document.title = `Click ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          changeName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        Click {count} times
      </button>
    </div>
  );
}

export default UseEffect;
