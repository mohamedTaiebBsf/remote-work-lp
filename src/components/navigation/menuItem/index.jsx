import React, { useState } from "react";
import { Container, Icon, Label, Link, SubMenu, Wrapper } from "./styles";

function MenuItem({ children, hasSubMenu, isSub, label, leftIcon, link }) {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const menuClass = label.split(" ").join("-");
  const arrow = `assets/images/icon-arrow-${openSubMenu ? "up" : "down"}.svg`;

  const onOpenSubMenu = () => {
    if (hasSubMenu) {
      console.log("click");
      setOpenSubMenu(!openSubMenu);
    }
  };

  return (
    <Container className={menuClass} $isSub={isSub}>
      <Wrapper onClick={onOpenSubMenu}>
        {leftIcon && <Icon className="subicon" src={leftIcon} alt="lefticon" />}
        {hasSubMenu ? <Label>{label}</Label> : <Link href={link}>{label}</Link>}
        {hasSubMenu && <Icon src={arrow} alt="rigthicon" />}
      </Wrapper>
      {hasSubMenu && openSubMenu && <SubMenu>{children}</SubMenu>}
    </Container>
  );
}

export default MenuItem;
