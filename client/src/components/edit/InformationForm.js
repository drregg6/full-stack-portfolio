import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

// redux
import { connect } from 'react-redux';
import { updateUser } from '../../actions/userActions';

class InformationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updatedBody: {
        general: 'information',
        skills: 'Workin on it',
        technologies: 'Workin on it',
        languages: 'Workin on it'
      }
    }

    this.user = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.user = newProps.user;
    const skills = newProps.information.skills.join(', ');
    const languages = newProps.information.languages.join(', ');
    const technologies = newProps.information.technologies.join(', ');

    this.setState({
      updatedBody: {
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
    const skillsPayload = this.state.updatedBody.skills.split(', ');
    const languagesPayload = this.state.updatedBody.languages.split(', ');
    const technologiesPayload = this.state.updatedBody.technologies.split(', ');

    const information = {
      skills: [...skillsPayload],
      languages: [...languagesPayload],
      technologies: [...technologiesPayload]
    }

    const updatedUser = {
      ...this.user,
      information
    }

    this.props.updateUser(updatedUser);
  }

  handleChange = ev => {
    this.setState({
      updatedBody: {
        ...this.state.updatedBody,
        [ev.target.name]: ev.target.value
      }
    })
  }

  render() {

    const renderSkillsGroup = (
      <FormGroup row>
        <Label for="skills">Skills</Label>
        <Input
          type="text"
          name="skills"
          id="skills"
          onChange={this.handleChange}
          value={this.state.updatedBody.skills}
        />
      </FormGroup>
      )

    const renderLanguagesGroup = (
      <FormGroup row>
        <Label for="languages">Languages</Label>
        <Input
          type="text"
          name="languages"
          id="languages"
          onChange={this.handleChange}
          value={this.state.updatedBody.languages}
        />
      </FormGroup>
      )

    const renderTechnologiesGroup = (
      <FormGroup row>
        <Label for="technologies">Technologies</Label>
        <Input
          type="text"
          name="technologies"
          id="technologies"
          onChange={this.handleChange}
          value={this.state.updatedBody.technologies}
        />
      </FormGroup>
      )

    return (
      <div className="inner-margin">
        <div className="inner-margin">
          <h1>About</h1>
          <p>Separate with a comma</p>
        </div>
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

export default connect(
  null,
  { updateUser }
)(InformationForm);