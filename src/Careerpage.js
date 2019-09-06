import React, { useState } from "react";
import ResponsiveContainer from "./ResponsiveContainer";
import Footpage from "./Footpage";
import { Segment, Container, Header, Icon, Card } from "semantic-ui-react";
import TopMenu from "./TopMenu";

const parcours = {
  list: [
    {
      id: "1",
      titre: "Mon parcours professionnel",
      icon: "rocket",
      blocks: [
        {
          id: "1",
          entreprise: "Crédit Agricole",
          date: "Mars 2013 - Mars 2014",
          description: "Building content ..."
        },
        {
          id: "2",
          entreprise: "Société Générale",
          date: "Mars 2013 - Mars 2014",
          description: "Building content ..."
        },
        {
          id: "3",
          entreprise: "BNP Paribas",
          date: "Mars 2012 - Mars 2013",
          description: "Building content ..."
        }
      ]
    },
    {
      id: "2",
      titre: "Mon parcours académique",
      icon: "graduation cap",
      blocks: [
        {
          id: "1",
          entreprise: "Université Paris-Est Créteil",
          date: "Joined in 2009",
          description: "Building content ..."
        },
        {
          id: "2",
          entreprise: "Lycée Turgot",
          date: "Joined in 2009",
          description: "Building content ..."
        },
        {
          id: "3",
          entreprise: "Lycée Jean-Lurçat",
          date: "Joined in 2005",
          description: "Building content ..."
        }
      ]
    }
  ]
};

function CareerLayout() {
  const [showDetails, setShowDetails] = useState(false);

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

      {parcours.list.map(item => {
        return (
          <Segment vertical basic>
            <Header as="h2" icon textAlign="center">
              <Icon name={item.icon} circular />
              {item.titre}
            </Header>
            <Container>
              <Card.Group>
                {item.blocks.map(i => {
                  return (
                    <Card>
                      <Card.Content>
                        <Card.Header>{i.entreprise}</Card.Header>
                        <Card.Meta>
                          <span className="date">{i.date}</span>
                        </Card.Meta>
                        <Card.Description>{i.description}</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <a>
                          <Icon name="eye" />
                          Voir plus
                        </a>
                      </Card.Content>
                    </Card>
                  );
                })}
              </Card.Group>
            </Container>
          </Segment>
        );
      })}
      <Footpage />
    </ResponsiveContainer>
  );
}

export default CareerLayout;
