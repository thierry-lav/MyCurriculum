import React from "react";
import { Segment } from "semantic-ui-react";
import ResponsiveContainer from "./ResponsiveContainer";
import Footpage from "./Footpage";
import TopMenu from "./TopMenu";

import HomepageHeading from "./HomepageHeading";
import TransitionBody from "./TransitionBody";

function HomepageLayout() {
  return (
    <ResponsiveContainer>
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 700, padding: "1em 0em" }}
        vertical
      >
        <TopMenu />
        <HomepageHeading />

        <TransitionBody scrollAt="280">Building content...</TransitionBody>
      </Segment>
      <Footpage />
    </ResponsiveContainer>
  );
}

export default HomepageLayout;
