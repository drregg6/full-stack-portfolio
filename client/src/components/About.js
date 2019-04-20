import React, { Component } from 'react';
import {
  Container,
  CardGroup,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';

class About extends Component {
  render() {
    return (
      <div className="custom-about component-margin" id="about">
        <Container fluid className="header-container flex-column" style={{border: '1rem solid orange', height: '90vh', minHeight: '250px', alignItems: 'flex-start'}} >
          <div className="about-header inner-margin">
            <h1 className="header-text" style={{color: '#444'}}>
              Hey,<br />
              I'm Dave
            </h1>
            <h2 className="header-subtext" style={{color: 'orange'}}>
              Nice to meet you!
            </h2>
          </div>
          <p>
            Teaching myself how to program for three years is a study in patience, determination, and perseverence.
            Designing and coding is both relaxing and meditative.
            Successfully running an app after a long session of programming is sublime.
          </p>
        </Container>
        <CardGroup className="inner-margin portfolio-margin-top" style={{marginLeft: '5rem', marginRight: '5rem', border: '1px dotted #444'}}>
          <Card className="center-content" style={{justifyContent: 'center', borderRight: '1px dotted #444', borderBottom: '1px dotted #444'}} body>
            <div className="about-card-header center-content flex-column">
              <i className="fab fa-js fa-3x"></i>
              <CardTitle className="header-subtext">Frontend</CardTitle>
            </div>
            <CardText>
              HTML<br />
              CSS<br />
              Bootstrap<br />
              Javascript
            </CardText>
          </Card>
          <Card className="center-content" style={{justifyContent: 'center', borderRight: '1px dotted #444', borderBottom: '1px dotted #444'}} body>
            <div className="about-card-header center-content flex-column">
              <i className="fab fa-react fa-3x"></i>
              <CardTitle className="header-subtext">Technologies</CardTitle>
            </div>
            <CardText>
              React<br />
              Redux<br />
              Express
            </CardText>
          </Card>
          <Card className="center-content" style={{justifyContent: 'center'}} body>
            <div className="about-card-header center-content flex-column">
              <i className="fas fa-database fa-3x"></i>
              <CardTitle className="header-subtext">Backend</CardTitle>
            </div>
            <CardText>
              MongoDB<br />
              Mongoose<br />
              SQLite<br />
              Ruby
            </CardText>
          </Card>
        </CardGroup>
      </div>
    )
  }
}

export default About;