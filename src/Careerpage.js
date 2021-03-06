import React from "react";
import ResponsiveContainer from "./ResponsiveContainer";
import { Segment, Container, Header, Icon, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const pro = {
  titre: "Mon parcours professionnel",
  icon: "rocket",
  blocks: [
    {
      id: "1",
      entreprise: "Novencia Group",
      date: "Juin 2018 - Aujourd'hui"
    },
    {
      id: "2",
      entreprise: "Sopra Steria",
      date: "Novembre 2012 - Avril 2018"
    }
  ]
};

const academic = {
  titre: "Mon parcours académique",
  icon: "graduation cap",
  blocks: [
    {
      id: "5",
      entreprise: "Université Paris-Est Créteil",
      date: "Joined in 2009"
    },
    {
      id: "6",
      entreprise: "Lycée Turgot",
      date: "Joined in 2009"
    },
    {
      id: "7",
      entreprise: "Lycée Jean-Lurçat",
      date: "Joined in 2005"
    }
  ]
};

function CareerLayout() {
  return (
    <ResponsiveContainer>
      <Segment vertical basic padded="very">
        <Header as="h2" icon textAlign="center">
          <Icon name={pro.icon} circular />
          {pro.titre}
        </Header>
        <Container>
          <Card.Group centered>
            {pro.blocks.map(i => {
              const linkTo = "/careersDetails/" + i.id;
              return (
                <Card>
                  <Card.Content>
                    <Card.Header>{i.entreprise}</Card.Header>
                    <Card.Meta>
                      <span className="date">{i.date}</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <Link to={linkTo}>
                      <Icon name="eye" />
                      Voir plus
                    </Link>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        </Container>
      </Segment>
      <Segment vertical basic padded="very">
        <Header as="h2" icon textAlign="center">
          <Icon name={academic.icon} circular />
          {academic.titre}
        </Header>
        <Container>
          <Card.Group centered>
            {academic.blocks.map(i => {
              return (
                <Card>
                  <Card.Content>
                    <Card.Header>{i.entreprise}</Card.Header>
                    <Card.Meta>
                      <span className="date">{i.date}</span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        </Container>
      </Segment>
    </ResponsiveContainer>
  );
}

export default CareerLayout;
