import React, { useEffect, useRef, useState } from "react";

function FocusInput() {
  const ref = useRef(null);
  const [time, setTime] = useState(0);
  const timeRef = useRef();

  useEffect(() => {
    ref.current.focus();

    timeRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      clearInterval(timeRef.current);
    };
  }, []);

  const focusInput = () => {
    ref.current.focus();
  };

  return (
    <div>
      <input type="text" ref={ref} />

      <button onClick={focusInput}>Focus Input</button>
      <div>Time: {time}s</div>
      <button onClick={() => clearInterval(timeRef.current)}>
        Clear Interval
      </button>
    </div>
  );
}

export default FocusInput;
