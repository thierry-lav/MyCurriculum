import React from "react";
import ResponsiveContainer from "./ResponsiveContainer";
import Footpage from "./Footpage";
import { Segment } from "semantic-ui-react";
import TopMenu from "./TopMenu";

function CareerLayout() {
  return (
    <ResponsiveContainer>
      <Segment
        inverted
        textAlign="center"
        style={{ padding: "1em 0em" }}
        vertical
      >
        <TopMenu />
      </Segment>
      Building in progress...
      <Footpage />
    </ResponsiveContainer>
  );
}

export default CareerLayout;
