/*

will only be username (unqiue)
first name
password
repeat password

*/

import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  Col,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

// redux
import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';

class NewUser extends Component {
  state = {
    modal: false,

    username: '',
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    github: '',
    twitter: '',
    linkedin: '',
    facebook: '',
    houseNumber: 0,
    street: '',
    apartment: '',
    city: '',
    state: '',
    country: '',
    zipCode: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit = ev => {
    ev.preventDefault();

    const newUser = {
      username: this.state.username,
      general: {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      },
      contact: {
        email: this.state.email,
        telephone: this.state.telephone,
        github: this.state.github,
        twitter: this.state.twitter,
        linkedin: this.state.linkedin,
        facebook: this.state.facebook
      },
      location: {
        houseNumber: this.state.houseNumber,
        street: this.state.street,
        apartment: this.state.apartment,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode+'',
        country: this.state.country
      }
    };

    this.props.addUser(newUser);

    this.setState({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      github: '',
      twitter: '',
      linkedin: '',
      facebook: '',
      houseNumber: 0,
      street: '',
      apartment: '',
      city: '',
      state: '',
      country: '',
      zipCode: ''
    });
    this.toggle();
  }
  handleChange = ev => {
    this.setState({
        [ev.target.name]: ev.target.value
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Create Your Portfolio!</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label sm={4} for="username">Username:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Unique username!"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="firstName">First Name:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Your first name"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="lastName">Last Name:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Your last name"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="email">Email:</Label>
                <Col sm={8}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email!"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="telephone">Telephone Number:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="telephone"
                    id="telephone"
                    placeholder="Telephone number"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="github">Github:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="github"
                    id="github"
                    placeholder="Github url"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="twitter">Twitter:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="twitter"
                    id="twitter"
                    placeholder="Twitter url"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="facebook">Facebook:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="facebook"
                    id="facebook"
                    placeholder="Facebook url"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="linkedin">linkedIn:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="linkedin"
                    id="linkedin"
                    placeholder="linkedIn url"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="houseNumber">House Number:</Label>
                <Col sm={8}>
                  <Input
                    type="number"
                    name="houseNumber"
                    id="houseNumber"
                    placeholder="Number"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="street">Street:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="street"
                    id="street"
                    placeholder="Street Name"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="apartment">Address2:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="apartment"
                    id="apartment"
                    placeholder="Apartment, Floor, etc..."
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="city">City:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City name"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="state">State:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="PA, NJ, etc..."
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="zipCode">Zip Code:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    placeholder="09023"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={4} for="country">Country:</Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="USA"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <Button color="danger" style={{marginTop: '2rem'}} block>
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default connect(
  null,
  { addUser }
)(NewUser);