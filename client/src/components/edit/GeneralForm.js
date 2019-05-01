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

class GeneralForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updatedBody: {
        key: 'general',
        firstName: '',
        lastName: ''
      }
    }

    this.user = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.user = newProps.user;
    const { firstName, lastName } = newProps.general;
    this.setState({
      updatedBody: {
        ...this.state.updatedBody,
        firstName,
        lastName
      }
    })
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const updatedUser = {
      ...this.user,
      general: this.state.updatedBody
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
    return (
      <div className="inner-margin">
        <h1 className="inner-margin">General Information</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="firstName">First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                onChange={this.handleChange}
                value={this.state.updatedBody.firstName}
              />
          </FormGroup>
          <FormGroup row>
            <Label for="lastName">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                onChange={this.handleChange}
                value={this.state.updatedBody.lastName}
              />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default connect(
  null,
  { updateUser }
)(GeneralForm);