import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 130px;
  display: flex;
  align-items: center;
  min-height: calc(100vh - 80.89px);

  @media (max-width: 1023px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 40px 0;
  }
`;

const Content = styled(motion.div)`
  width: 50%;
  margin-right: 100px;

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 0;
    width: 100%;
    padding: 0 20px;
  }

  & h1 {
    color: var(--black);
    line-height: 50px;
    font-size: 50px;

    @media (max-width: 1023px) {
      & br {
        display: inline;
        content: " ";
        clear: none;
      }

      font-size: 38px;
      text-align: center;
    }
  }

  & p {
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 18px;

    @media (max-width: 1023px) {
      font-size: 16px;
      text-align: center;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  & a {
    display: inline-block;
    font-weight: 700;
    color: var(--white);
    background-color: var(--black);
    padding: 16px;
    border-radius: 10px;
    transition: all 0.4s ease;

    border: 1px solid var(--black);

    &:hover {
      background-color: transparent;
      color: var(--black);
    }

    @media (max-width: 1023px) {
      margin: auto;
    }
  }
`;

const Clients = styled(motion.div)`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & img {
    margin-right: 10px;

    @media (max-width: 420px) {
      width: 20%;
    }

    &:last-child {
      margin-right: 0 !important;
    }
  }
`;

const ImageWrapper = styled(motion.div)`
  width: 50%;

  @media (max-width: 1023px) {
    width: 100%;
  }

  & img {
    width: 100%;

    &:first-child {
      @media (max-width: 1023px) {
        display: none;
      }
    }

    &:last-child {
      @media (min-width: 1023px) {
        display: none;
      }
    }
  }

  @media (max-width: 1023px) {
    margin-bottom: 30px;
  }
`;

const contentAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

const titleAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

const descAnim = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.75, ease: "easeOut" } },
};

const buttonAnim = {
  hidden: { x: 200, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.75, ease: "linear" } },
};

const imageAnim = {
  hidden: { scale: 0.3 },
  show: { scale: 1, transition: { duration: 1 } },
};

const clientAnim = {
  hidden: { x: "100%", opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

export {
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
};
