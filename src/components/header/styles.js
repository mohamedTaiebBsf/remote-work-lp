import styled from "styled-components";

const Container = styled.header`
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  margin-right: 40px;

  &:hover {
    color: var(--black);
  }

  &:last-child {
    margin-right: 0;
    border: 1px solid var(--gray);
    border-radius: 8px;
    padding: 12px 20px;

    &:hover {
      border-color: var(--black);
    }
  }
`;

const Logo = styled.img`
  width: 65px;
  margin-right: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export { Container, Link, Logo, Wrapper };
