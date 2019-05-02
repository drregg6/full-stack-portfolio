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

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updatedBody: {
        key: 'contact',
        email: '',
        github: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        telephone: ''
      }
    }

    this.user = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.user = newProps.user;
    const { email, github, twitter, facebook, linkedin, telephone } = newProps.contact;
    this.setState({
      updatedBody: {
        ...this.state.updatedBody,
        email,
        github,
        twitter,
        facebook,
        linkedin,
        telephone
      }
    })
  }

  handleSubmit = ev => {
    ev.preventDefault();

    const updatedUser = {
      ...this.user,
      contact: this.state.updatedBody
    }

    this.props.updateUser(updatedUser);
  }

  handleChange = ev => {
    this.setState({
      updatedBody: {
        ...this.state.updatedBody,
        [ev.target.name]: ev.target.value
      }
    });
  }

  render() {
    const renderFormGroup = this.props.contact !== 'Loading user...' ? (
      Object.keys(this.props.contact).map((key, i) => {
        if (key === 'key') return null;
        return (
          <FormGroup key={key}>
            <Label for={key}>{key}</Label>
            <Input
              type="text"
              name={key}
              id={key}
              defaultValue={this.props.contact[key]}
              onChange={this.handleChange}
            />
          </FormGroup>
        )
      })
    ) : ('Loading user...');
    return (
      <div className="inner-margin">
        <h1 className="inner-margin">Contact</h1>
        <Form onSubmit={this.handleSubmit}>
          {renderFormGroup}
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default connect(
  null,
  { updateUser }
)(ContactForm);