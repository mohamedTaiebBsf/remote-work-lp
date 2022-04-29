import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  max-width: 375px;
  background-color: var(--white);
  color: var(--white);
  padding: 20px 20px 50px 20px;
  position: fixed;
  right: 0;
  z-index: 100;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform: translateX(102%);
  transition: transform 0.3s ease-out;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e0e0e0;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px #6969dd;
  }

  &.open {
    transform: translateX(0);
  }
`;

export { Container };
