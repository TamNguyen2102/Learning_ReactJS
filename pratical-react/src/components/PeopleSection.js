import React from "react";
import { contentPeople } from "../content";
import Card from "./Card";
import { Flex } from "./styles/Flex.styled";

function PeopleSection() {
  return (
    <>
      <Flex style={{ backgroundColor: "#f8f9fa" }}>
        {contentPeople.map((item, index) => {
          return <Card key={index} item={item} imgRound={true}></Card>;
        })}
      </Flex>
    </>
  );
}

export default PeopleSection;
