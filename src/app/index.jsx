import React from "react";
import GlobalStyle, { Container } from "./styles";
import Header from "../components/header";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </React.Fragment>
  );
}

export default App;
