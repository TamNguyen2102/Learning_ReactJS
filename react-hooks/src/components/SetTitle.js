import React, { useEffect, useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function SetTitle() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);
  return (
    <div>
      <span>Count - {count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment Count
      </button>
    </div>
  );
}

export default SetTitle;
