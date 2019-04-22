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

// redux
import { connect } from 'react-redux';
import { findUser } from '../actions/userActions';

class Contact extends Component {
    componentDidMount() {
        this.props.findUser('daveregg');
    }

    render() {
        const {user} = this.props.user;

        const email = user && user.contact ? user.contact.email : null;
        const github = user && user.contact ? user.contact.github : null;
        const telephone = user && user.contact ? user.contact.telephone : null;
        const twitter = user && user.contact ? user.contact.twitter : null;

        const city = user && user.location ? user.location.city : null;
        const state = user && user.location ? user.location.state : null;
        const country = user && user.location ? user.location.country : null;
        const houseNumber = user && user.location ? user.location.houseNumber : null;
        const street = user && user.location ? user.location.street : null;
        const zipCode = user && user.location ? user.location.zipCode : null;

        console.log(`my zipcode is ${zipCode} and my email is ${email}`)
        // this is auto-generating south street
        // use maps.google.com API to generate a query instead of a static site
        const MAPS_IFRAME = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12235.212789765612!2d-75.19255614420365!3d39.94579159495915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c643e19594bf%3A0x1a170241e0f2c523!2s${houseNumber}+${street}%2C+${city}%2C+${state}+${zipCode}!5e0!3m2!1sen!2sus!4v1555676265578!5m2!1sen!2sus`;

        return (
            <div className="custom-contact component-margin" id="contact">
                <Container>
                    <div className="contact-header inner-margin">
                        <h1 className="header-text">Let's have <br /> a chat.</h1>
                        <h2 className="header-subtext">Contact me</h2>
                    </div>
                    <div className="contact-form-row row inner-margin">
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
                            <Button outline className="btn" color="primary">Submit</Button>
                        </Form>
                        <div className="col-md-6 col-sm-12 contact-info-boxes">
                            <div className="center-content row contact-info-box flex-column">
                                <div className="col-xs-6 center-content contact-info-i">
                                    <i className="far fa-comments fa-3x"></i>
                                </div>
                                <div className="col-xs-6 center-content flex-column">
                                    Tel: 215.530.0440<br />
                                    E: {email}<br />
                                </div>
                            </div>
                            <div className="center-content contact-info-box"></div>
                            <div className="center-content contact-info-box"></div>
                            <div className="center-content row contact-info-box flex-column">
                                <div className="col-xs-6 center-content contact-info-i">
                                    <i className="fas fa-address-card fa-3x"></i>
                                </div>
                                <div className="col-xs-6 center-content flex-column">
                                    {houseNumber + ' '}{street}<br />
                                    {city}, {state}, {zipCode}<br />
                                    USA
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <iframe src={MAPS_IFRAME} allowFullScreen className="inner-margin"></iframe>
                <div className="contact-icons center-content inner-margin row">
                    <div className="center-content col-xs-6 col-sm-6 col-md-3">
                        <a href="#"><i className="fas fa-code-branch fa-4x"></i></a>
                    </div>
                    <div className="center-content col-xs-6 col-sm-6 col-md-3">
                        <a href="#"><i className="fab fa-twitter fa-4x"></i></a>
                    </div>
                    <div className="center-content col-xs-6 col-sm-6 col-md-3">
                        <a href="#"><i className="fab fa-linkedin fa-4x"></i></a>
                    </div>
                    <div className="center-content col-xs-6 col-sm-6 col-md-3">
                        <a href="#"><i className="fab fa-facebook-f fa-4x"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.user })

export default connect(
    mapStateToProps,
    {
        findUser
    }
)(Contact);