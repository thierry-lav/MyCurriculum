import React from "react";

import { Segment } from "semantic-ui-react";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import Footpage from "./Footpage";

import TopMenu from "./TopMenu";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>
      <Segment inverted vertical>
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
