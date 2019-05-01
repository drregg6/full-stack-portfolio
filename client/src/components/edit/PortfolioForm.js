/*

update portfolio!!! everything still needs to be done!!!
add an upload image
figure out where to place image
figure out how to render image

*/

import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
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
        <h1 className="inner-margin">Portfolio</h1>
        <Form>
          <FormGroup row>
            <Label for="portfolioOptions">List of Apps:</Label>
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
          </FormGroup>
          <FormGroup row>
            <Label for="portfolioName">App Name</Label>
            <Input
              type="text"
              name="portfolioName"
              id="portfolioName"
              value={this.state.portfolioName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="portfolioTechnologies">App Technologies</Label>
            <Input
              type="text"
              name="portfolioTechnologies"
              id="portfolioTechnologies"
              onChange={this.handleChange}
              value={this.state.portfolioTechnologies}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="portfolioUrl">App Url</Label>
            <Input
              type="text"
              name="portfolioUrl"
              id="portfolioUrl"
              onChange={this.handleChange}
              value={this.state.portfolioUrl}
            />
          </FormGroup>
          <FormGroup row>
            <Label for="portfolioImage">App Image</Label>
            <Input
              type="text"
              name="portfolioImage"
              id="portfolioImage"
              onChange={this.handleChange}
              value={this.state.portfolioImage}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default PortfolioForm;