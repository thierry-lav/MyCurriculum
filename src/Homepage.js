import React from "react";
import { Segment } from "semantic-ui-react";
import ResponsiveContainer from "./ResponsiveContainer";
import HomepageHeading from "./HomepageHeading";
import "./Homepage.css";

function HomepageLayout() {
  return (
    <ResponsiveContainer>
      <HomepageHeading />
      <Segment textAlign="center" vertical>
        Building Content ...
      </Segment>
    </ResponsiveContainer>
  );
}

export default HomepageLayout;
