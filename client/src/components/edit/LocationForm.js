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

class LocationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updatedBody: {
        key: 'location',
        houseNumber: 0,
        street: '',
        apartment: '',
        city: '',
        state: '',
        country: '',
        zipCode: ''
      }
    }

    this.user = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.user = newProps.user;
    const { houseNumber, street, apartment, city, state, country, zipCode } = newProps.location;

    this.setState({
      updatedBody: {
        ...this.state.updatedBody,
        houseNumber,
        street,
        apartment,
        city,
        state,
        country,
        zipCode
      }
    })
  }

  handleChange = ev => {
    this.setState({
      updatedBody: {
        ...this.state.updatedBody,
        [ev.target.name]: ev.target.value
      }
    })
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const updatedUser = {
      ...this.user,
      location: this.state.updatedBody
    }

    this.props.updateUser(updatedUser);
  }


  render() {
    const renderFormGroup = this.props.location !== 'Loading user...' ? (
      Object.keys(this.props.location).map((key, i) => {
        if (key === 'key') return null;
        return (
          <FormGroup>
            <Label for={key}>{key}</Label>
            <Input
              type="text"
              name={key}
              id={key}
              defaultValue={this.props.location[key]}
              onChange={this.handleChange}
            />
          </FormGroup>
        )
      })
    ) : ('Loading user...');
    return (
      <div className="inner-margin">
        <h1 className="inner-margin">Location</h1>
        <Form onSubmit={this.handleSubmit}>
          {renderFormGroup}
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default connect(
  null, { updateUser }
)(LocationForm);