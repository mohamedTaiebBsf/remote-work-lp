import React from "react";
import Menu from "../navigation/menu";
import { Container, Link, Logo, Wrapper } from "./styles";

function Header() {
  return (
    <Container>
      <Logo src="assets/images/logo.svg" alt="logo" />
      <Wrapper>
        <Menu />
        <div>
          <Link href="#">login</Link>
          <Link href="#">register</Link>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Header;
