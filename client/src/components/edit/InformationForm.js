import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button
} from 'reactstrap';

class InformationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      information: {
        general: 'information',
        skills: 'Workin on it',
        technologies: 'Workin on it',
        languages: 'Workin on it'
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {

    const skills = newProps.information.skills.join(', ');
    const languages = newProps.information.languages.join(', ');
    const technologies = newProps.information.technologies.join(', ');

    this.setState({
      information: {
        skills,
        technologies,
        languages
      }
    });

    console.log(this.state);

  }

  handleSubmit = ev => {
    ev.preventDefault();
    // on submit each arr is reassembled
    let skillsPayload = this.state.information.skills.split(', ');
    let languagesPayload = this.state.information.languages.split(', ');
    let technologiesPayload = this.state.information.technologies.split(', ');
    const payload = {
      ...this.state,
      information: {
        skills: [...skillsPayload],
        languages: [...languagesPayload],
        technologies: [...technologiesPayload]
      }
    }

    console.log(payload);
  }

  handleChange = ev => {
    this.setState({
      information: {
        [ev.target.name]: ev.target.value
      }
    })
  }

  render() {

    const renderSkillsGroup = (
      <FormGroup row>
        <Label sm={2} for="skills">Skills</Label>
        <Col sm={10}>
          <Input
            type="text"
            name="skills"
            id="skills"
            onChange={this.handleChange}
            value={this.state.information.skills}
          />
        </Col>
      </FormGroup>
      )

    const renderLanguagesGroup = (
      <FormGroup row>
        <Label sm={2} for="languages">Languages</Label>
        <Col sm={10}>
          <Input
            type="text"
            name="languages"
            id="languages"
            onChange={this.handleChange}
            value={this.state.information.languages}
          />
        </Col>
      </FormGroup>
      )

    const renderTechnologiesGroup = (
      <FormGroup row>
        <Label sm={2} for="technologies">Technologies</Label>
        <Col sm={10}>
          <Input
            type="text"
            name="technologies"
            id="technologies"
            onChange={this.handleChange}
            value={this.state.information.technologies}
          />
        </Col>
      </FormGroup>
      )

    return (
      <div className="inner-margin">
        <p>Separate with a comma</p>
        <Form onSubmit={this.handleSubmit}>
          {renderSkillsGroup}
          {renderLanguagesGroup}
          {renderTechnologiesGroup}
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default InformationForm;