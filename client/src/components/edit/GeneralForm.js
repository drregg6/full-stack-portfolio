/*

form and state update
proxy error onSubmit - cannot locate edit route

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

// redux
import { connect } from 'react-redux';
import { updateUser } from '../../actions/userActions';

class GeneralForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      general: {
        key: 'general',
        firstName: '',
        lastName: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const username = this.props.username;
    const { firstName, lastName } = newProps.general;
    this.setState({
      username,
      general: {
        firstName,
        lastName
      }
    })
  }

  handleSubmit = ev => {
    ev.preventDefault();

    console.log(this.state);
    this.props.updateUser(this.state);
  }

  handleChange = ev => {
    this.setState({
      general: {
        ...this.state.general,
        [ev.target.name]: ev.target.value
      }
    })
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <Form className="inner-margin" onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label sm={2} for="firstName">First Name</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                onChange={this.handleChange}
                value={this.state.general.firstName}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for="lastName">Last Name</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                onChange={this.handleChange}
                value={this.state.general.lastName}
              />
            </Col>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  { updateUser }
)(GeneralForm);