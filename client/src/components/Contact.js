/* text color and highlights: the jumbotron color */

import React, { Component } from 'react';
import {
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

class Contact extends Component {
    render() {
        return (
            <div className="custom-contact" id="contact">
                <Container>
                    <div className="contact-header">
                        <h1>Let's have a chat.</h1>
                        <h2>Contact me</h2>
                    </div>
                    <div className="row">
                        <Form className="col-md-6 col-sm-12">
                            <FormGroup>
                                <Label for="formName">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="formName"
                                    placeholder="John Doe"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="formEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="formEmail"
                                    placeholder="example@company.co"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="formSubject">Subject</Label>
                                <Input
                                    type="text"
                                    name="subject"
                                    id="formSubject"
                                    placeholder="Job Opportunity"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="formMessage">Message</Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    id="formMessage"
                                />
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                        <div className="col-md-6 col-sm-12" style={{display: 'flex', border: '1px dotted red', margin: '0', padding: '0', flexWrap: 'wrap'}}>
                            <div className="box" style={{border: '1px dashed blue', width: '50%'}}>This</div>
                            <div className="box" style={{border: '1px dashed blue', width: '50%'}}>is</div>
                            <div className="box" style={{border: '1px dashed blue', width: '50%'}}>my</div>
                            <div className="box" style={{border: '1px dashed blue', width: '50%'}}>content</div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Contact;