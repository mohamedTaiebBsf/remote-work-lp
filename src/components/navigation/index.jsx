import React from "react";
import Menu from "./menu";
import { Container, Link, Wrapper } from "./styles";

function Navigation() {
  return (
    <Container>
      <Menu />
      <Wrapper>
        <Link href="#">login</Link>
        <Link href="#">register</Link>
      </Wrapper>
    </Container>
  );
}

export default Navigation;
