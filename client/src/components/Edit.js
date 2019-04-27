import React, { Component } from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button
} from 'reactstrap';

// redux
import { connect } from 'react-redux';
import { findUser } from '../actions/userActions';

class Edit extends Component {
  componentDidMount() {
    this.props.findUser(this.props.match.params.username);
  }

  render() {
    const user = this.props.user !== undefined ? this.props.user : 'Workin on it';
    const general = this.props.user.general !== undefined ? this.props.user.general : 'Workin on it';
    const contact = this.props.user.contact !== undefined ? this.props.user.contact : 'Workin on it';
    const location = this.props.user.location !== undefined ? this.props.user.location : 'Workin on it';
    console.log(general);
    return(
      <div className="edit-page">
        <Container>
          <Form>
            <FormGroup row>
              <Label sm={2} for="username">Username:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  defaultValue={user.username}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="firstName">First Name:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  defaultValue={general.firstName}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="lastName">Last Name:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  defaultValue={general.lastName}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="email">Email:</Label>
              <Col sm={10}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={contact.email}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="telephone">Telephone Number:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="telephone"
                  id="telephone"
                  defaultValue={contact.telephone}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="github">Github:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="github"
                  id="github"
                  defaultValue={contact.github}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="twitter">Twitter:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="twitter"
                  id="twitter"
                  defaultValue={contact.twitter}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="facebook">Facebook:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="facebook"
                  id="facebook"
                  defaultValue={contact.facebook}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="linkedin">linkedIn:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  defaultValue={contact.linkedin}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="houseNumber">House Number:</Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="houseNumber"
                  id="houseNumber"
                  defaultValue={location.houseNumber}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="street">Street:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="street"
                  id="street"
                  defaultValue={location.street}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="apartment">Address2:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="apartment"
                  id="apartment"
                  defaultValue={location.apartment}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="city">City:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  defaultValue={location.city}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="state">State:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="state"
                  id="state"
                  defaultValue={location.state}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="zipCode">Zip Code:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  defaultValue={location.zipCode}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} for="country">Country:</Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="country"
                  id="country"
                  defaultValue={location.country}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <Button>Update</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export default connect(
  mapStateToProps,
  { findUser }
)(Edit);