import React from "react";
import { Bar, Container } from "./styles";

function Hamburger({ open, toggleSideDrawer }) {
  return (
    <Container onClick={toggleSideDrawer} className={open && "open"}>
      <Bar />
    </Container>
  );
}

export default Hamburger;
