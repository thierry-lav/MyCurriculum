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
      <Segment style={{ padding: "4em 4em" }} inverted secondary vertical>
        I am pretty noticeable but you might check out other content before you
        look at me.
      </Segment>
      <Segment style={{ padding: "2em 2em" }} inverted color="red" vertical>
        Red
      </Segment>
      <Footpage />
    </ResponsiveContainer>
  );
}

export default CareerLayout;
