import React from "react";
import { Container, Menu, Responsive } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useOvermind } from "./overmind";

function TopMenu() {
  const { state, actions } = useOvermind();

  return (
    <Responsive {...Responsive.onlyComputer}>
      <Menu inverted={true} secondary={true} pointing={true} size="large">
        <Container>
          <Menu.Item active={state.menu.home}>
            <Link to="/" onClick={() => actions.activeHomeMenu()}>
              Home
            </Link>
          </Menu.Item>

          <Menu.Item active={state.menu.projects}>
            <Link to="/projects" onClick={() => actions.activeProjectsMenu()}>
              Projects
            </Link>
          </Menu.Item>

          <Menu.Item active={state.menu.careers}>
            <Link to="/careers" onClick={() => actions.activeCareersMenu()}>
              Careers
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    </Responsive>
  );
}

export default TopMenu;
