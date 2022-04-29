import React, { useState } from "react";
import GlobalStyle, { Container } from "./styles";
import Header from "../components/header";
import SideDrawer from "../components/navigation/sideDrawer";

function App() {
  const [sideDrawerOpened, setSideDrawerOpened] = useState(false);

  return (
    <React.Fragment>
      <GlobalStyle />
      <SideDrawer
        open={sideDrawerOpened}
        onClose={() => setSideDrawerOpened(false)}
      />
      <Container>
        <Header
          onSideDrawerClick={() => setSideDrawerOpened(!sideDrawerOpened)}
          sideDrawerOpened={sideDrawerOpened}
        />
      </Container>
    </React.Fragment>
  );
}

export default App;
