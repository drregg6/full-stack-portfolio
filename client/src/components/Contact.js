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
        const MAPS_IFRAME = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12235.212789765612!2d-75.19255614420365!3d39.94579159495915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c643e19594bf%3A0x1a170241e0f2c523!2s2616+South+St%2C+Philadelphia%2C+PA+19146!5e0!3m2!1sen!2sus!4v1555676265578!5m2!1sen!2sus`;

        return (
            <div className="custom-contact" id="contact" style={{marginTop: '5em', marginBottom: '5em'}}>
                <Container>
                    <div className="contact-header" style={{marginBottom: '2em'}}>
                        <h1>Let's have <br /> a chat.</h1>
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
                        <div className="col-md-6 col-sm-12" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <div className="row">
                                <div className="col-xs-6" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <i className="fas fa-address-book fa-5x"></i>
                                </div>
                                <div className="col-xs-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '2.5em'}}>
                                    <h2>Direct lines</h2>
                                    Tel: 215.530.0440<br />
                                    E: drregg6@gmail.com<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <iframe src={MAPS_IFRAME} style={{width: '100%', height: '60vh', frameBorder: '0', border: '0'}} allowfullscreen></iframe>
                <Container>
                    <div className="center-content row">
                        <i className="center-content fas fa-code-branch fa-5x col-xs-12 col-sm-6 col-md-3"></i>
                        <i className="center-content fab fa-twitter fa-5x col-xs-12 col-sm-6 col-md-3"></i>
                        <i className="center-content fab fa-linkedin fa-5x col-xs-12 col-sm-6 col-md-3"></i>
                        <i className="center-content fab fa-facebook-f fa-5x col-xs-12 col-sm-6 col-md-3"></i>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Contact;
