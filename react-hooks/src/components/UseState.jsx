import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("banana");
  const [fullName, changeFullName] = useState({ firstname: "", lastname: "" });
  const { firstname, lastname } = fullName;
  const [items, setItems] = useState([]);

  function addNumber() {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  }

  function decrement() {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }

  function increment() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  function changeFirstName(e) {
    changeFullName({ ...fullName, firstname: e.target.value });
  }
  function changeLastName(e) {
    changeFullName({ ...fullName, lastname: e.target.value });
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <div>
        {count} {fruit}
      </div>
      <button onClick={increment}>+</button>

      <div>
        <label htmlFor="">First Name </label>
        <input type="text" onChange={changeFirstName} />
      </div>
      <div>
        <label htmlFor="">Last Name </label>
        <input type="text" onChange={changeLastName} />
      </div>
      <h2>First name is: {firstname}</h2>
      <h2>Last name is: {lastname}</h2>
      <h3>{JSON.stringify(fullName)}</h3>

      <div className="list">
        <button onClick={addNumber}>Add a number</button>
        <h1>List:</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>Item value: {item.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UseState;
