import React from "react";

import { Segment } from "semantic-ui-react";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import Footpage from "./Footpage";

import TopMenu from "./TopMenu";

import HomepageHeading from "./HomepageHeading";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>
      <Segment
        inverted
        textAlign="center"
        //style={{ minHeight: 700, padding: "1em 0em" }}
        vertical
      >
        <TopMenu />
      </Segment>

      {children}
      <Footpage />
    </DesktopContainer>
    <MobileContainer>
      {children}
      <Footpage />
    </MobileContainer>
  </div>
);

export default ResponsiveContainer;
