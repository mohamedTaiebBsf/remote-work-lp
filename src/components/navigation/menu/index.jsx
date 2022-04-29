import React from "react";
import MenuItem from "../menuItem";
import { Container } from "./styles";

function Menu() {
  return (
    <Container>
      <MenuItem label="features" hasSubMenu={true}>
        <MenuItem
          label="todo list"
          leftIcon="assets/images/icon-todo.svg"
          isSub={true}
        />
        <MenuItem
          label="calendar"
          leftIcon="assets/images/icon-calendar.svg"
          isSub={true}
        />
        <MenuItem
          label="reminders"
          leftIcon="assets/images/icon-reminders.svg"
          isSub={true}
        />
        <MenuItem
          label="planning"
          leftIcon="assets/images/icon-planning.svg"
          isSub={true}
        />
      </MenuItem>
      <MenuItem label="company" hasSubMenu={true}>
        <MenuItem label="history" isSub={true} />
        <MenuItem label="our team" isSub={true} />
        <MenuItem label="blog" isSub={true} />
      </MenuItem>
      <MenuItem label="careers" link="#careers" />
      <MenuItem label="about" link="#about" />
    </Container>
  );
}

export default Menu;
