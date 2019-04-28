import React, { Component } from 'react';
import {
  CardGroup,
  Card,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

class About extends Component {

  render() {
    const { skills, technologies, languages } = this.props.information !== undefined ? this.props.information : 'Loading user...';
    const firstName = this.props.general ? this.props.general.firstName : 'Loading user...';

    let renderSkills = skills !== undefined ? (
        skills.map((skill, i) => {
          return <ListGroupItem key={i}>{skill}</ListGroupItem>
        })
      ) : ( <ListGroupItem>Workin' on it!</ListGroupItem> );

    let renderTechnologies = technologies !== undefined ? (
      technologies.map((tech, i) => {
        return <ListGroupItem key={i}>{tech}</ListGroupItem>
      })
    ) : ( <ListGroupItem>Workin' on it</ListGroupItem> );

    let renderLanguages = languages !== undefined ? (
      languages.map((language, i) => {
        return <ListGroupItem key={i}>{language}</ListGroupItem>
      })
    ) : ( <ListGroupItem>Workin' real hard</ListGroupItem> );

    return (
      <div className="custom-about component-margin" id="about">
        <div className="custom-container flex-column about-header">
          <div className="inner-margin">
            <h1 className="header-text">
              Hey,<br />
              I'm {firstName}
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
        </div>
        <CardGroup className="about-card-group inner-margin header-invasion-margin-top row">
          <Card className="about-card center-content col-12 col-lg-4 inner-padding" body>
            <div className="about-card-header center-content flex-column">
              <i className="fab fa-js fa-3x"></i>
              <CardTitle className="header-subtext">Skills</CardTitle>
            </div>
            <CardText>
              <ListGroup flush>
                {renderSkills}
              </ListGroup>
            </CardText>
          </Card>
          <Card className="about-card center-content col-12 col-lg-4 inner-padding" body>
            <div className="about-card-header center-content flex-column">
              <i className="fas fa-database fa-3x"></i>
              <CardTitle className="header-subtext">Technologies</CardTitle>
            </div>
            <CardText>
              <ListGroup flush>
                {renderTechnologies}
              </ListGroup>
            </CardText>
          </Card>
          <Card className="about-card center-content col-12 col-lg-4 inner-padding" body>
            <div className="about-card-header center-content flex-column">
              <i className="fab fa-react fa-3x"></i>
              <CardTitle className="header-subtext">Languages</CardTitle>
            </div>
            <CardText>
              <ListGroup flush>
                {renderLanguages}
              </ListGroup>
            </CardText>
          </Card>
        </CardGroup>
      </div>
    )
  }
}

export default About;