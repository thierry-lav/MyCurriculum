import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function TopMenu() {
  return (
    <Menu inverted={true} secondary={true} pointing={true} size="large">
      <Container>
        <Menu.Item active>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/projects">Projects</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/careers">Careers</Link>
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default TopMenu;
