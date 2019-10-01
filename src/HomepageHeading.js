import React from "react";
import { Responsive, Header, Segment } from "semantic-ui-react";

const HomepageHeading = () => (
  <React.Fragment>
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <Segment
        inverted
        textAlign="center"
        style={{ padding: "1em 0em" }}
        vertical
      >
        <Header
          as="h1"
          content="Curriculum Vitae"
          inverted
          style={{
            fontSize: "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "3em"
          }}
        />
        <Header
          as="h2"
          content="Work hard and get what you want."
          inverted
          style={{
            fontSize: "1.7em",
            fontWeight: "normal",
            marginTop: "1.5em"
          }}
        />
      </Segment>
    </Responsive>
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      <Segment
        inverted
        textAlign="center"
        style={{ padding: "1em 0em" }}
        vertical
      >
        <Header
          as="h1"
          content="Curriculum Vitae"
          inverted
          style={{
            fontSize: "2em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "1.5em"
          }}
        />
        <Header
          as="h2"
          content="Work hard and get what you want."
          inverted
          style={{
            fontSize: "1.5em",
            fontWeight: "normal",
            marginTop: "0.5em"
          }}
        />
      </Segment>
    </Responsive>
  </React.Fragment>
);

export default HomepageHeading;
