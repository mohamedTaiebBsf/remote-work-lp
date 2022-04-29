import styled from "styled-components";

const Container = styled.header`
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 65px;
  margin-right: 50px;
`;

const Wrapper = styled.div`
  flex: 1;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export { Container, Logo, Wrapper };
