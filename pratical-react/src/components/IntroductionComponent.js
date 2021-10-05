import React from "react";
import { Introduction } from "./styles/Introduction.styled";
import { Container } from "./styles/Container.styled";
import { Title } from "./styles/Title.styled";
import Form from "./Form";
import { Flex } from "./styles/Flex.styled";
function IntroductionComponent({ navHeight, text }) {
  return (
    <div>
      <Introduction navHeight={navHeight}>
        <Container>
          <Flex layout="column">
            <Title size="2">
              {text
                ? text
                : "Generate more leads with a professional landing page!"}
            </Title>
            <Form>
              <input type="text" placeholder="Email Address"></input>
            </Form>
          </Flex>
        </Container>
      </Introduction>
    </div>
  );
}

export default IntroductionComponent;
