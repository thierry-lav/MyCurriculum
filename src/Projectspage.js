import React from "react";
import ResponsiveContainer from "./ResponsiveContainer";
import { Segment } from "semantic-ui-react";
import Footpage from "./Footpage";
import TopMenu from "./TopMenu";

const ProjectLayout = () => (
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

export default ProjectLayout;
