import React, { Component } from 'react';
import {
  Container,
  CardGroup,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

class About extends Component {
  render() {
    return (
      <div className="custom-about component-margin" id="about">
        <Container fluid className="custom-container flex-column about-header">
          <div className="inner-margin">
            <h1 className="header-text">
              Hey,<br />
              I'm Dave
            </h1>
            <h2 className="header-subtext">
              Nice to meet you!
            </h2>
          </div>
          <p>
            Teaching myself how to program for three years is a study in patience, determination, and perseverence.
            Designing and coding is both relaxing and meditative.
            Successfully running an app after a long session of programming is sublime.
          </p>
        </Container>
        <CardGroup className="about-card-group inner-margin header-invasion-margin-top row">
          <Card className="about-card center-content col-12 col-lg-4 inner-margin" body>
            <div className="about-card-header center-content flex-column">
              <i className="fab fa-js fa-3x"></i>
              <CardTitle className="header-subtext">Skills</CardTitle>
            </div>
            <CardText>
              <ListGroup flush>
                <ListGroupItem>Mobile first design</ListGroupItem>
                <ListGroupItem>Clean, organized code</ListGroupItem>
                <ListGroupItem>Problem solving</ListGroupItem>
              </ListGroup>
            </CardText>
          </Card>
          <Card className="about-card center-content col-12 col-lg-4 inner-margin" body>
            <div className="about-card-header center-content flex-column">
              <i className="fab fa-react fa-3x"></i>
              <CardTitle className="header-subtext">Languages</CardTitle>
            </div>
            <CardText>
              <ListGroup flush>
                <ListGroupItem>HTML/CSS</ListGroupItem>
                <ListGroupItem>Javascript</ListGroupItem>
                <ListGroupItem>Ruby</ListGroupItem>
                <ListGroupItem>Python</ListGroupItem>
              </ListGroup>
            </CardText>
          </Card>
          <Card className="about-card center-content col-12 col-lg-4 inner-margin" body>
            <div className="about-card-header center-content flex-column">
              <i className="fas fa-database fa-3x"></i>
              <CardTitle className="header-subtext">Technologies</CardTitle>
            </div>
            <CardText>
              <ListGroup flush>
                <ListGroupItem>Bootstrap</ListGroupItem>
                <ListGroupItem>React</ListGroupItem>
                <ListGroupItem>Redux</ListGroupItem>
                <ListGroupItem>MongoDB</ListGroupItem>
                <ListGroupItem>Mongoose</ListGroupItem>
                <ListGroupItem>SQLite</ListGroupItem>
                <ListGroupItem>Express</ListGroupItem>
                <ListGroupItem>Rails</ListGroupItem>
              </ListGroup>
            </CardText>
          </Card>
        </CardGroup>
      </div>
    )
  }
}

export default About;