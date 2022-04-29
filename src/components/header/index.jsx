import React from "react";
import Menu from "../navigation/menu";
import { Container, Logo, Wrapper } from "./styles";

function Header() {
  return (
    <Container>
      <Logo src="assets/images/logo.svg" alt="logo" />
      <Wrapper>
        <Menu />
        <div>Buttons</div>
      </Wrapper>
    </Container>
  );
}

export default Header;
