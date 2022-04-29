import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1023px) {
    flex-direction: column;
    margin-top: 30%;
  }
`;

const Link = styled.a`
  margin-right: 40px;

  @media (max-width: 1023px) {
    margin-right: 0;
  }

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

    @media (max-width: 1023px) {
      width: 100%;
      text-align: center;
      margin-top: 20px;
    }
  }
`;

const Wrapper = styled.div`
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 50px;
  }
`;

export { Container, Link, Wrapper };
