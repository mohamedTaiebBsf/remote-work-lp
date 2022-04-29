import React from "react";
import { Clients, Container, Content, ImageWrapper } from "./styles";

function LandingPage() {
  return (
    <Container>
      <Content>
        <h1>
          Make <br />
          remote work
        </h1>
        <p>
          Get your team sync, no matter your location. <br />
          Streamlines processes, create team rituals, and watch productivity
          soar.
        </p>
        <a href="#learn">Learn more</a>
        <Clients>
          <img src="assets/images/client-databiz.svg" alt="databiz" />
          <img src="assets/images/client-audiophile.svg" alt="audiophile" />
          <img src="assets/images/client-meet.svg" alt="meet" />
          <img src="assets/images/client-maker.svg" alt="maker" />
        </Clients>
      </Content>
      <ImageWrapper>
        <img src="assets/images/image-hero-desktop.png" alt="desktop" />
        <img src="assets/images/image-hero-mobile.png" alt="mobile" />
      </ImageWrapper>
    </Container>
  );
}

export default LandingPage;
