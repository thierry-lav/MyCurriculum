import React from "react";
import ResponsiveContainer from "./ResponsiveContainer";

import { Segment, List, Item, Container } from "semantic-ui-react";
import sg from "./images/sg.jpg";
import bnp from "./images/bnp.jpg";
import ca from "./images/ca.jpg";

const details = {
  entreprises: [
    {
      id: "1",
      experiences: [
        {
          id: "1",
          logo: "sg",
          entreprise: "Société Générale",
          date: "Juin 2018 - Aujourd'hui",
          description: "Jarvis : application de calcul de risque de crédit",
          taches: [
            "Développement des fonctionnalités",
            "Développement d'un calculateur supplémentaire",
            "Développement des tests unitaires",
            "Participation aux dailys meetings",
            "Développement de graph Grafana",
            "Configuration de traefik"
          ],
          technos: [
            "Java 8/11",
            "Spring boot 2",
            "TestNg",
            "AngularJs",
            "Maven",
            "Git",
            "IntelliJ",
            "Jenkins",
            "SonarQube",
            "Grafana",
            "Ansible Tower",
            "Prometheus",
            "ELK",
            "Swagger",
            "Traefik",
            "Consul",
            "FitNesse",
            "Mockito",
            "Apache Ignite",
            "MyBatis",
            "Teradata",
            "MongoDb",
            "Github",
            "Nexus"
          ]
        }
      ]
    },
    {
      id: "2",
      experiences: [
        {
          id: "1",
          logo: "ca",
          entreprise: "Crédit Agricole - SA",
          date: "Septembre 2017 - Avril 2018",
          description:
            "MySkills : application permettant de réaliser les bilans de missions des collaborateurs et d’exploiter les informations renseignées pour aider à la mutualisation des compétences et d’anticiper les besoins de recrutement.",
          taches: [
            "Développement du profil utilisateur, de la saisie des objectifs / bilan avec un processus de signature électronique : développement d’IHM à l’aide de maquettes UX",
            "Développement du back-end des fonctionnalités (profil, objectifs et bilan)",
            "Réalisation des tests unitaires",
            "Gestion des branches et trunk SVN",
            "Participation aux daily meeting "
          ],
          technos: [
            "Java/Java EE 8",
            "HTML5/CSS3",
            "Wildfly 9",
            "JSF 2 (Primefaces 6.1)",
            "Hibernate 4/ JPA2",
            "Spring4",
            "Bootstrap",
            "JQuery",
            "DbUnit 2.4",
            "Eclipse",
            "SQLDeveloper",
            "Maven",
            "SVN",
            "Sonar",
            "Jenkins",
            "Trello",
            "SCRUM"
          ]
        },

        {
          id: "2",
          logo: "ca",
          entreprise: "Crédit Agricole - CIB",
          date: "Mars 2016 - Septembre 2017",
          description:
            "MIFID II : l’objectif est de rendre les marchés financiers européens plus efficaces et plus transparents ainsi que d’améliorer la protection des investisseurs. FAR (FATCA & AEOI) : FAR permet de collecter annuellement, auprès des institutions financières du groupe, les informations concernant les avoirs et revenus enregistrés sur les comptes détenus par les contribuables américains en dehors des Etats-Unis",
          taches: [
            "Développement d’évolution IHM",
            "Développement d’un batch de chargement de référentiel (xls)",
            "Correction d’anomalies",
            "Développement du questionnaire MIFID II",
            "Développement d’un batch de génération de PDF"
          ],
          technos: [
            "Java/Java EE 7",
            "HTML/CSS",
            "Weblogic",
            "Spring (MVC, Boot Batch)",
            "JQuery",
            "Bootstrap",
            "iText 7",
            "Eclipse",
            "Maven",
            "SVN",
            "Calitrack (Jira)",
            "Microsoft SQL server 2012"
          ]
        },
        {
          id: "3",
          logo: "sg",
          entreprise: "Société Générale (Madrid)",
          date: "Mars 2015 - Mars 2016",
          description:
            "Caroline est une application qui permet la collecte des pertes internes du Groupe Société́ Générale. Le but de l’application est d’alimenter la base centrale (Centor) afin de répondre aux contraintes réglementaires du projet BALE II (reporting et calcul du capital groupe).",
          taches: [
            "Chiffrage et correction des études d’expertises",
            "Rédaction des spécifications techniques",
            "Réalisation du chiffrage et développement des évolutions",
            "Correction d’anomalies",
            "Encadrement et accompagnement des 2 développeurs juniors",
            "Participation à la migration SAFE",
            "Participation à la migration Maven",
            "Rédaction de documentations techniques"
          ],
          technos: [
            "Java/Java EE 6",
            "Weblogic",
            "Struts 1.2",
            "Spring (Security, Batch)",
            "Eclipse",
            "SQLDeveloper",
            "SVN",
            "Maven",
            "Oracle",
            "Servlet",
            "JUnit"
          ]
        },
        {
          id: "4",
          logo: "sg",
          entreprise: "Société Générale",
          date: "Avril 2014 - Mars 2015",
          description:
            "BASILIQ : application alimentée par plusieurs sources de données permettant le calcul des ratios de liquidité « LCR » et « NSFR » ainsi que l’exécution d’extractions Excel. Au sein de l’équipe IHM, développement d’interface web permettant des ajustement de rapports réglementaires dans le cadre de Bale III.",
          taches: [
            "Développement des évolutions",
            "Correction des anomalies",
            "Participation à la préparation des backlogs ",
            "Participation aux daily meeting"
          ],
          technos: [
            "Java/Java EE 6",
            "SQL",
            "Weblogic",
            "JSF 1.2",
            "Eclipse",
            "ClearCase",
            "SQLDeveloper",
            "Oracle"
          ]
        },
        {
          id: "4",
          logo: "bnp",
          entreprise: "BNP Paribas",
          date: "Novembre 2012 - Avril 2014",
          description:
            "ELECTRA est un gestionnaire de document numérique (GDN). Les fonctionnalités principales sont le dépôt, la consultation, la recherche et l’administration des documents numériques ainsi que la journalisation des évènements",
          taches: [
            "Développement des fonctionnalités de consultation, de recherche, d’archive, de modification et de suppression de document électronique (Base64) via des messages de la file MQ ou des appels SOAP",
            "Réalisation des tests unitaires",
            "Passage de connaissances et formation des développeurs situés au Centre de Services de Lille",
            "Rédaction de documentation : document d’installation applicative, support de formation",
            "Correction des anomalies"
          ],
          technos: [
            "Java/jee",
            "SQL",
            "PL/SQL",
            "Websphere",
            "Websphere MQ",
            "Spring",
            "Hibernate",
            "Mockito/JUnit",
            "EHCache",
            "Dozer",
            "Eclipse",
            "SVN",
            "Maven",
            "Jenkins",
            "Sonar",
            "Oracle"
          ]
        }
      ]
    }
  ]
};
function CareerDetailLayout({ match }) {
  const currentEntreprise = details.entreprises.find(
    u => u.id === match.params.id
  );
  return (
    <ResponsiveContainer>
      <Segment vertical basic>
        <Container text>
          <Item.Group>
            {currentEntreprise.experiences.map(item => {
              const logoToRender =
                item.logo === "sg" ? sg : item.logo === "ca" ? ca : bnp;

              return (
                <Item>
                  <Item.Image size="small" src={logoToRender} />

                  <Item.Content>
                    <Item.Header>{item.entreprise}</Item.Header>
                    <Item.Meta>{item.date}</Item.Meta>
                    <Item.Description>
                      {item.description}

                      <List bulleted verticalAlign="middle" size="tiny">
                        {item.taches.map(tache => {
                          return <List.Item>{tache}</List.Item>;
                        })}
                      </List>
                    </Item.Description>
                    <Item.Extra>
                      {item.technos.map(techno => {
                        return techno + " ";
                      })}
                    </Item.Extra>
                  </Item.Content>
                </Item>
              );
            })}
          </Item.Group>
        </Container>
      </Segment>
    </ResponsiveContainer>
  );
}

export default CareerDetailLayout;
