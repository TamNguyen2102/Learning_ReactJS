import React from "react";
import { Flex } from "./styles/Flex.styled";
import Card from "./Card";
import { content } from "../content";

function Info() {
  return (
    <Flex style={{ backgroundColor: "#f8f9fa" }}>
      {content.map((item, index) => {
        return <Card key={index} item={item}></Card>;
      })}
    </Flex>
  );
}

export default Info;
