import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button
} from 'reactstrap';

class GeneralForm extends Component {
  render() {
    const { firstName, lastName } = this.props.general !== undefined ? this.props.general : 'Loading user...';
    return (
      <React.Fragment>
        <Form className="inner-margin">
          <FormGroup row>
            <Label sm={2} for="firstName">First Name</Label>
            <Col sm={10}>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                defaultValue={firstName}
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
                defaultValue={lastName}
              />
            </Col>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default GeneralForm;