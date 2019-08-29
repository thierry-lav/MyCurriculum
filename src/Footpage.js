import React from "react";

import { Container, Grid, Header, List, Segment } from "semantic-ui-react";
function Footpage() {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About me" />
              <List link inverted>
                <List.Item>
                  <List.Icon name="linkedin" />
                  <List.Content>
                    <a href="https://fr.linkedin.com/in/thierry-lav-48a4b927">
                      LinkedIn
                    </a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="github" />
                  <List.Content>
                    <a href="https://github.com/thierry-lav">My works</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
export default Footpage;
