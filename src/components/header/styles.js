import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.header`
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.img)`
  width: 65px;
  margin-right: 50px;
`;

const Wrapper = styled.div`
  flex: 1;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const logoAnim = {
  hidden: { opacity: 0 },
  show: { rotate: 360, opacity: 1, transition: { duration: 0.5 } },
};

export { Container, Logo, logoAnim, Wrapper };
