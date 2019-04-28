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
    return (
      <div>
        <Form>
          <FormGroup>
            <Label sm={2} for="yoMama">Information</Label>
            <Col sm={10}>
              <Input
                type="text"
              />
            </Col>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default InformationForm;