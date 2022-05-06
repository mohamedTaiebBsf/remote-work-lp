import React from "react";
import Navigation from "../navigation";
import Hamburger from "../navigation/sideDrawer/hamburger";
import { Container, Logo, logoAnim, Wrapper } from "./styles";

function Header({ sideDrawerOpened, onSideDrawerClick }) {
  return (
    <Container>
      <Logo
        variants={logoAnim}
        initial="hidden"
        animate="show"
        src="assets/images/logo.svg"
        alt="logo"
      />
      <Wrapper>
        <Navigation />
      </Wrapper>
      <Hamburger toggleSideDrawer={onSideDrawerClick} open={sideDrawerOpened} />
    </Container>
  );
}

export default Header;
