import React from "react";
import ResponsiveContainer from "./ResponsiveContainer";
import Footpage from "./Footpage";
import {
  Segment,
  Container,
  Header,
  Icon,
  Card,
  Image,
  Reveal
} from "semantic-ui-react";
import TopMenu from "./TopMenu";
import TransitionBody from "./TransitionBody";

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
      <Segment vertical basic>
        <Header as="h2" icon textAlign="center">
          <Icon name="rocket" circular />
          Mon parcours professionnel
        </Header>
        <Container>
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>Crédit Agricole</Card.Header>
                <Card.Meta>
                  <span className="date">Mars 2013 - Mars 2014</span>
                </Card.Meta>
                <Card.Description>Building content ...</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="eye" />
                  Voir plus
                </a>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Société Générale (Madrid)</Card.Header>
                <Card.Meta>
                  <span className="date">Mars 2013 - Mars 2014</span>
                </Card.Meta>
                <Card.Description>Building content ...</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="eye" />
                  Voir plus
                </a>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Société Générale</Card.Header>
                <Card.Meta>
                  <span className="date">Mars 2013 - Mars 2014</span>
                </Card.Meta>
                <Card.Description>Building content ...</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="eye" />
                  Voir plus
                </a>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>BNP Paribas</Card.Header>
                <Card.Meta>
                  <span className="date">Novembre 2012 - Mars 2013</span>
                </Card.Meta>
                <Card.Description>Building content ...</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="eye" />
                  Voir plus
                </a>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
      </Segment>
      <Segment vertical basic>
        <Header as="h2" icon textAlign="center">
          <Icon name="graduation cap" circular />
          Mon parcours scolaire
        </Header>
        <Container>
          <Card.Group>
            <Card>
              <Card.Content>
                <Card.Header>Université Paris-Est Créteil</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2009</span>
                </Card.Meta>
                <Card.Description>Building content ...</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="eye" />
                  Voir plus
                </a>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Lycée Turgot</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2007</span>
                </Card.Meta>
                <Card.Description>Building content ...</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="eye" />
                  Voir plus
                </a>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Lycée Jean-Lurçat</Card.Header>
                <Card.Meta>
                  <span className="date">Joined in 2005</span>
                </Card.Meta>
                <Card.Description>Building content ...</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="eye" />
                  Voir plus
                </a>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
      </Segment>
      <Footpage />
    </ResponsiveContainer>
  );
}

export default CareerLayout;
