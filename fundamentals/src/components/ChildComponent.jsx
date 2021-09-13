import React from "react";

export default function ChildComponent(props) {
  return (
    <div>
      <h2>What will Batman do?</h2>
      <button onClick={() => props.eventHandler("Gotham")}>Save Gotham</button>
    </div>
  );
}
