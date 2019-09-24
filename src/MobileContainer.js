import React, { useState } from "react";
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useOvermind } from "./overmind";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

function MobileContainer({ children }) {
  const { actions } = useOvermind();
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <Responsive
      as={Sidebar.Pushable}
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={() => setSidebarOpened(false)}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item active>
          <Link to="/" onClick={() => actions.activeHomeMenu()}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/projects" onClick={() => actions.activeProjectsMenu()}>
            Projects
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/careers" onClick={() => actions.activeCareersMenu()}>
            Careers
          </Link>
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 350, padding: "1em 0em" }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={() => setSidebarOpened(true)}>
                <Icon name="sidebar" />
              </Menu.Item>
            </Menu>
          </Container>
        </Segment>
        {children}
      </Sidebar.Pusher>
    </Responsive>
  );
}

export default MobileContainer;
