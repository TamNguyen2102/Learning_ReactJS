import React from "react";
import { contentBody } from "../content";
import { StyledBody } from "./styles/Body.styled";
import { Flex } from "./styles/Flex.styled";

function Body() {
  return (
    <StyledBody>
      {contentBody.map((content) => {
        return (
          <Flex layout={content.id % 2 === 0 && "row-reverse"}>
            <div className="imageBody">
              <img src={`./assets/img/${content.image}`} />
            </div>

            <article>
              <h3>{content.title}</h3>
              <p>{content.body}</p>
            </article>
          </Flex>
        );
      })}
    </StyledBody>
  );
}

export default Body;
