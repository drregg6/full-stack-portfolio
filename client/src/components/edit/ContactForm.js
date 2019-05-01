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
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      contact: {
        key: 'contact',
        email: '',
        github: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        telephone: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const username = this.props.username;
    const { email, github, twitter, facebook, linkedin, telephone } = newProps.contact;
    this.setState({
      username,
      contact: {
        ...this.state.contact,
        email,
        github,
        twitter,
        facebook,
        linkedin,
        telephone
      }
    })
  }

  handleSubmit = ev => {
    ev.preventDefault();
    console.log(ev);
  }

  handleChange = ev => {
    this.setState({
      contact: {
        ...this.state.contact,
        [ev.target.name]: ev.target.value
      }
    });
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
                onChange={this.handleChange}
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