import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class NewUser extends Component {
  state = {
    modal: false,

    username: '',
    name: '',
    email: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit = ev => {
    console.log(ev);
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
                <FormGroup>
                  <Label for="username">Username:</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Unique username!"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="firstName">First Name:</Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Your first name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last Name:</Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Your last name"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email!"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="telephone">Telephone Number:</Label>
                  <Input
                    type="text"
                    name="telephone"
                    id="telephone"
                    placeholder="Telephone number"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="github">Github:</Label>
                  <Input
                    type="github"
                    name="github"
                    id="github"
                    placeholder="Github url"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="twitter">Twitter:</Label>
                  <Input
                    type="twitter"
                    name="twitter"
                    id="twitter"
                    placeholder="Twitter url"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="facebook">Facebook:</Label>
                  <Input
                    type="facebook"
                    name="facebook"
                    id="facebook"
                    placeholder="Facebook url"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="linkedin">linkedIn:</Label>
                  <Input
                    type="linkedin"
                    name="linkedin"
                    id="linkedin"
                    placeholder="linkedIn url"
                    onChange={this.handleChange}
                  />
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

export default NewUser;