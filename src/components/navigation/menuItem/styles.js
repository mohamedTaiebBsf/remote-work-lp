import styled from "styled-components";

const SubMenu = styled.div`
  background-color: var(--white);
  padding: 25px;
  border-radius: 8px;
  box-shadow: -1px 2px 14px 1px rgba(20, 20, 20, 0.3);
  position: absolute;
  top: 40px;
  right: 0;
  min-width: 130px;
`;

const Container = styled.div`
  position: relative;
  margin-right: ${(props) => (props.$isSub ? 0 : "40px")};
  margin-bottom: ${(props) => (props.$isSub ? "10px" : 0)};

  &:last-child {
    margin-right: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &.company {
    & ${SubMenu} {
      left: 0;
      right: auto;
    }
  }
`;

const Icon = styled.img`
  &:not(.subicon) {
    margin-left: 8px;
  }

  &.subicon {
    margin-right: 16px;
  }
`;

const Label = styled.p`
  text-transform: capitalize;
`;

const Link = styled.a`
  text-transform: capitalize;

  &:hover {
    color: var(--black);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: var(--black);
  }
`;

export { Container, Icon, Label, Link, SubMenu, Wrapper };
