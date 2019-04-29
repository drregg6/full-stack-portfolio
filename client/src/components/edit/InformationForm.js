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
  render() {
    const skills = this.props.information.skills !== undefined ? this.props.information.skills : 'Workin on it';
    const skillsString = skills !== 'Workin on it' && skills.length !== 0 ? skills.join(', ') : '';

    const technologies = this.props.information.technologies !== undefined ? this.props.information.technologies : 'Workin on it';
    const technologiesString = technologies !== 'Workin on it' && technologies.length !== 0 ? technologies.join(', ') : '';

    const languages = this.props.information.languages !== undefined ? this.props.information.languages : 'Workin on it';
    const languagesString = languages !== 'Workin on it' && languages.length !== 0 ? languages.join(', ') : '';

    const renderSkillsGroup = skills !== 'Workin on it' && skills.length !== 0 ? (
      <FormGroup row>
        <Label sm={2} for="skills">Skills</Label>
        <Col sm={10}>
          <Input
            type="text"
            name="skills"
            id="skills"
            defaultValue={skillsString}
          />
        </Col>
      </FormGroup>
      ) : ('');

    const renderLanguagesGroup = languages !== 'Workin on it' && languages.length !== 0 ? (
      <FormGroup row>
        <Label sm={2} for="languages">Languages</Label>
        <Col sm={10}>
          <Input
            type="text"
            name="languages"
            id="languages"
            defaultValue={languagesString}
          />
        </Col>
      </FormGroup>
      ) : ('');

    const renderTechnologiesGroup = technologies !== 'Workin on it' && technologies.length !== 0 ? (
      <FormGroup row>
        <Label sm={2} for="technologies">Technologies</Label>
        <Col sm={10}>
          <Input
            type="text"
            name="technologies"
            id="technologies"
            defaultValue={technologiesString}
          />
        </Col>
      </FormGroup>
      ) : ('');

    return (
      <div className="inner-margin">
        <p>Separate with a comma</p>
        <Form>
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