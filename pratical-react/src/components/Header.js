import React, { useEffect, useRef, useState } from "react";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Nav, Logo } from "./styles/Header.styled";
import { Introduction } from "./styles/Introduction.styled";
import { Title } from "./styles/Title.styled";
import { Flex } from "./styles/Flex.styled";
import Form from "./Form";

function Header() {
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef();

  useEffect(() => {
    setNavHeight(navRef.current.clientHeight);
  }, []);

  return (
    <>
      <Container>
        {/* Navigation */}
        <Nav ref={navRef}>
          <Logo>Start Bootstrap</Logo>
          <Button>Sign up</Button>
        </Nav>
      </Container>

      {/* Introduction  */}
      <Introduction navHeight={navHeight}>
        <Container>
          <Flex layout="column">
            <Title size="2">
              Generate more leads with a professional landing page!
            </Title>
            <Form>
              <input type="text" placeholder="Email Address"></input>
            </Form>
          </Flex>
        </Container>
      </Introduction>
    </>
  );
}

export default Header;
