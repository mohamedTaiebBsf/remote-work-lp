import React from "react";
import Navigation from "../index";
import Backdrop from "../../backdrop";
import { Container } from "./styles";

function SideDrawer({ open, onClose }) {
  return (
    <React.Fragment>
      <Backdrop show={open} clicked={onClose} />
      <Container className={open && "open"}>
        <Navigation />
      </Container>
    </React.Fragment>
  );
}

export default SideDrawer;
