import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

class About extends Component {
  render() {
    return (
      <div className="custom-about component-margin" id="about">
        <Container>
          <div className="about-header inner-margin">
            <h1 className="header-text">Hey there!</h1>
              <h2 className="header-subtext">Dave Regg here</h2>
          </div>
          <div>
            <p>
              About me!
            </p>
          </div>
          <div>
            <Row>
              <Col xs="12" md="4">
                <Card body>
                  <CardTitle>Hello World!</CardTitle>
                  <CardText>This is my body!</CardText>
                </Card>
              </Col>
              <Col xs="12" md="4">
                <Card body>
                  <CardTitle>Hello World!</CardTitle>
                  <CardText>This is my body!</CardText>
                </Card>
              </Col>
              <Col xs="12" md="4">
                <Card body>
                  <CardTitle>Hello World!</CardTitle>
                  <CardText>This is my body!</CardText>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}

export default About;