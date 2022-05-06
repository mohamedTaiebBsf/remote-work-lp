import { motion } from "framer-motion";
import React from "react";
import {
  buttonAnim,
  clientAnim,
  Clients,
  Container,
  Content,
  contentAnim,
  descAnim,
  imageAnim,
  ImageWrapper,
  titleAnim,
} from "./styles";

function LandingPage() {
  return (
    <Container>
      <Content variants={contentAnim} initial="hidden" animate="show">
        <motion.h1 variants={titleAnim}>
          Make <br />
          remote work
        </motion.h1>
        <motion.p variants={descAnim}>
          Get your team sync, no matter your location. <br />
          Streamlines processes, create team rituals, and watch productivity
          soar.
        </motion.p>
        <motion.a variants={buttonAnim} href="#learn">
          Learn more
        </motion.a>
        <Clients variants={contentAnim}>
          <motion.img
            variants={clientAnim}
            src="assets/images/client-databiz.svg"
            alt="databiz"
          />
          <motion.img
            variants={clientAnim}
            src="assets/images/client-audiophile.svg"
            alt="audiophile"
          />
          <motion.img
            variants={clientAnim}
            src="assets/images/client-meet.svg"
            alt="meet"
          />
          <motion.img
            variants={clientAnim}
            src="assets/images/client-maker.svg"
            alt="maker"
          />
        </Clients>
      </Content>
      <ImageWrapper variants={imageAnim} initial="hidden" animate="show">
        <img src="assets/images/image-hero-desktop.png" alt="desktop" />
        <img src="assets/images/image-hero-mobile.png" alt="mobile" />
      </ImageWrapper>
    </Container>
  );
}

export default LandingPage;
