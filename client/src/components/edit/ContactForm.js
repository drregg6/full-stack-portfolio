import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button
} from 'reactstrap';

class ContactForm extends Component {
  handleSubmit = ev => {
    ev.preventDefault();
    console.log(ev);
  }

  render() {
    const renderFormGroup = this.props.contact !== 'Loading user...' ? (
      Object.keys(this.props.contact).map((key, i) => {
        if (key === 'key') return;
        return (
          <FormGroup row>
            <Label sm={2} for={key}>{key}</Label>
            <Col sm={10}>
              <Input
                type="text"
                name={key}
                id={key}
                defaultValue={this.props.contact[key]}
              />
            </Col>
          </FormGroup>
        )
      })
    ) : ('Loading user...');
    return (
      <div className="inner-margin">
        <Form onSubmit={this.handleSubmit}>
          {renderFormGroup}
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default ContactForm;