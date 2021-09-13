import React from "react";
import { render } from "react-dom";
import Person from "./Person";

function ListRendering() {
  const Persons = [
    {
      id: 1,
      name: "Bruce",
      age: 38,
      power: "Rich",
    },

    {
      id: 2,
      name: "Clark",
      age: 35,
      power: "Fly",
    },

    {
      id: 3,
      name: "Diana",
      age: 38,
      power: "Rich",
    },
  ];
  const PersonList = Persons.map((person) => {
    return <Person key={person.id} person={person} primary={true}></Person>;
  });
  console.log(PersonList);
  return <div>{PersonList}</div>;
}

export default ListRendering;
