import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

class Edit extends Component {
  render() {
    return(
      <div>
        <Form>
          <FormGroup>
            <Label for="username">Username:</Label>
            <Input
              type="text"
              placeholder="Enter new username"
              id="username"
              name="username"
            />
          </FormGroup>
          <Button>Update</Button>
        </Form>
      </div>
    )
  }
}

export default Edit