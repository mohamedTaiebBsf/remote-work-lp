import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

export { Container };
