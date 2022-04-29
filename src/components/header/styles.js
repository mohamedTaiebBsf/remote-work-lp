import styled from "styled-components";

const Container = styled.header`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 60px;
  margin-right: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export { Container, Logo, Wrapper };
