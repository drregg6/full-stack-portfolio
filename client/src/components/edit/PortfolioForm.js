/*

add an upload image
figure out where to place image
figure out how to render image

*/

import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button
} from 'reactstrap';

class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      portfolioName: 'App name',
      portfolioTechnologies: 'App, technologies',
      portfolioUrl: 'http://www.app.com/url',
      portfolioImage: 'Upload an image'
    }

    this.handleChange = this.handleChange.bind(this);
    this.dropdownChange = this.dropdownChange.bind(this);
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  dropdownChange = ev => {
    const app = this.props.portfolio !== undefined ? this.props.portfolio.apps.filter(app => ev.target.value === app.name)[0] : 'Workin on it';
    const techString = app.technologies.join(', ');
    this.setState({
      portfolioName: app.name,
      portfolioTechnologies: techString,
      portfolioUrl: app.url,
      portfolioImage: app.image
    });

  }

  render() {
    const portfolio = this.props.portfolio !== 'Loading user...' ? this.props.portfolio : 'Loading user...';
    const apps = portfolio.apps !== undefined ? portfolio.apps : [{name: 'Add an App!', _id: 0}];

    return (
      <div className="inner-margin">
        <Form>
          <FormGroup row>
            <Label sm={2} for="portfolioOptions">List of Apps:</Label>
            <Col sm={10}>
              <Input
                type="select"
                id="portfolioOptions"
                name="portfolioOptions"
                onChange={this.dropdownChange}
              >
                {apps.map(app => {
                  return (
                    <option
                      key={app._id}
                      value={app.name}
                      label={app.name}
                    >
                    {app.name}
                    </option>
                  )
                })}
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for="portfolioName">App Name</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="portfolioName"
                id="portfolioName"
                value={this.state.portfolioName}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for="portfolioTechnologies">App Technologies</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="portfolioTechnologies"
                id="portfolioTechnologies"
                onChange={this.handleChange}
                value={this.state.portfolioTechnologies}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for="portfolioUrl">App Url</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="portfolioUrl"
                id="portfolioUrl"
                onChange={this.handleChange}
                value={this.state.portfolioUrl}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for="portfolioImage">App Image</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="portfolioImage"
                id="portfolioImage"
                onChange={this.handleChange}
                value={this.state.portfolioImage}
              />
            </Col>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default PortfolioForm;