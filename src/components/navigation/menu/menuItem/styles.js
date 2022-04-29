import styled from "styled-components";

const SubMenu = styled.div`
  background-color: var(--white);
  margin-top: 20px;
  margin-left: 20px;

  @media (min-width: 1023px) {
    padding: 25px;
    border-radius: 8px;
    box-shadow: -1px 2px 14px 1px rgba(20, 20, 20, 0.3);
    position: absolute;
    top: 40px;
    right: 0;
    min-width: 130px;
    margin-top: 0;
    margin-left: 0;
  }
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

  @media (max-width: 1023px) {
    margin-right: 0;
    margin-bottom: 30px;

    color: var(--gray) !important;

    &:hover {
      color: var(--black) !important;
    }
  }
`;

const Icon = styled.img`
  &:not(.subicon) {
    margin-left: 8px;
  }

  &.subicon {
    margin-right: 16px;
    width: 18px;
    height: 18px;
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

  &:hover ${Icon}:not(.subicon) {
    filter: invert(0%) sepia(18%) saturate(9%) hue-rotate(319deg)
      brightness(50%) contrast(90%);
  }
`;

export { Container, Icon, Label, Link, SubMenu, Wrapper };
