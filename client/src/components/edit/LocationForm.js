import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button
} from 'reactstrap';

class LocationForm extends Component {

  render() {
    const { houseNumber, street, apartment, city, state, country, zipCode } = this.props.location !== undefined ? this.props.location : 'Loading user...';
    const renderFormGroup = this.props.location !== undefined ? (
      Object.keys(this.props.location).map((key, i) => {
        if (key === 'key') return;
        return (
          <FormGroup row>
            <Label sm={2} for={key}>{key}</Label>
            <Col sm={10}>
              <Input
                type="text"
                name={key}
                id={key}
                defaultValue={this.props.location[key]}
              />
            </Col>
          </FormGroup>
        )
      })
    ) : ('Loading user...');
    return (
      <React.Fragment>
        <Form className="inner-margin">
          {renderFormGroup}
          <Button>Submit</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default LocationForm;

          // <FormGroup row>
          //   <Label sm={2} for="houseNumber">House Number</Label>
          //   <Col sm={10}>
          //     <Input
          //       type="number"
          //       id="houseNumber"
          //       name="houseNumber"
          //       defaultValue={houseNumber}
          //     />
          //   </Col>
          // </FormGroup>