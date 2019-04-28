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
  state = {
    name: 'App name',
    technologies: 'App, technologies',
    url: 'http://www.app.com/url',
    image: 'Upload an image'
  }

  dropdownChange = ev => {
    const app = this.props.portfolio !== undefined ? this.props.portfolio.apps.filter(app => ev.target.value === app.name)[0] : 'Workin on it';
    const techString = app.technologies.join(', ');
    this.setState({
      name: app.name,
      technologies: techString,
      url: app.url,
      image: app.image
    });
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  render() {
    const portfolio = this.props.portfolio !== 'Loading user...' ? this.props.portfolio : 'Loading user...';
    const apps = portfolio.apps !== undefined ? portfolio.apps : [{name: 'Add an App!', _id: 0}];

    return (
      <div>
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
            <Label sm={2} for='name'>App Name</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="name"
                id="name"
                onChange={this.handleChange}
                defaultValue={this.state.name}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for='technologies'>App Technologies</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="technologies"
                id="technologies"
                onChange={this.handleChange}
                defaultValue={this.state.technologies}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for='url'>App Url</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="url"
                id="url"
                onChange={this.handleChange}
                defaultValue={this.state.url}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for='image'>App Image</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="image"
                id="image"
                onChange={this.handleChange}
                defaultValue={this.state.image}
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