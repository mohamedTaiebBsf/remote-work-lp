import styled from "styled-components";

const Bar = styled.div`
  width: 100%;
  height: 0.1875rem;
  background: var(--black);
  border-radius: 0.3125rem;
  transition: all 0.5s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.1875rem;
    background: var(--black);
    border-radius: 0.3125rem;
    transition: all 0.5s ease-in-out;
  }

  &::before {
    transform: translateY(-0.625rem);
  }

  &::after {
    transform: translateY(0.625rem);
  }
`;

const Container = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 101;

  @media (min-width: 1023px) {
    display: none;
  }

  &.open ${Bar} {
    width: 100%;
    transform: translateX(-3.125rem);
    background: transparent;
    box-shadow: none;
  }

  &.open ${Bar}::before, &.open ${Bar}::after {
    background: var(--black);
  }

  &.open ${Bar}::before {
    transform: rotate(45deg) translate(2.1875rem, -2.1875rem);
  }

  &.open ${Bar}::after {
    transform: rotate(-45deg) translate(2.1875rem, 2.1875rem);
  }
`;

export { Container, Bar };
