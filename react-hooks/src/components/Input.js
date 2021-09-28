import React from "react";
import useInput from "../hooks/useInput";

function Input() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [secondName, bindSecondName, resetSecondName] = useInput("");

  const submitHandler = (e) => {
    alert(`FirstName: ${firstName}, SecondName: ${secondName}`);
    e.preventDefault();
    resetFirstName();
    resetSecondName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFirstName} />
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" {...bindSecondName} />
        </div>

        <button onClick={submitHandler}>Submit Form</button>
      </form>
    </div>
  );
}

export default Input;
