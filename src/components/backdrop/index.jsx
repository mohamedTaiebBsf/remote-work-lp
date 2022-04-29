import React from "react";
import Container from "./styles";

function Backdrop({ show, clicked }) {
  return show ? <Container onClick={clicked} /> : null;
}

export default Backdrop;
