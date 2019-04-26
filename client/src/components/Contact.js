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
// import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import {
    getSubdocument
 } from '../actions/userActions';

class Contact extends Component {

    componentDidMount() {
        this.props.getSubdocument('daveregg', 'contact');
        this.props.getSubdocument('daveregg', 'location');
    }

    telephoneFormatter = (str) => {
        if (str.length === 10) {
            return `${str.substring(0,3)}.${str.substring(3,6)}.${str.substring(6)}`;
        } else if (str.length === 11) {
            return `+${str.substring(0,1)} ${str.substring(1,4)}.${str.substring(4,7)}.${str.substring(7)}`;
        } else {
            return `Incorrect length`;
        }
    }

    render() {
        const { houseNumber, street, city, state, country, zipCode } = this.props.location;
        const { email, github, twitter, linkedin, facebook } = this.props.contact;

        const telephone = this.props.contact.telephone !== undefined ? this.telephoneFormatter(this.props.contact.telephone) : '111.111.1111';
        // this is auto-generating south street
        // use maps.google.com API to generate a query instead of a static site
        const MAPS_IFRAME = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12235.212789765612!2d-75.19255614420365!3d39.94579159495915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c643e19594bf%3A0x1a170241e0f2c523!2s2616+South%20St%2C+Philadelphia%2C+PA+19146!5e0!3m2!1sen!2sus!4v1555676265578!5m2!1sen!2sus`;

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
                                    name="msg"
                                    id="formMessage"
                                />
                            </FormGroup>
                            <Button outline className="btn" color="primary" type="submit">Submit</Button>
                        </Form>
                        <div className="col-md-6 col-sm-12 contact-info-boxes">
                            <div className="center-content row contact-info-box flex-column">
                                <div className="col-xs-6 center-content contact-info-i">
                                    <i className="far fa-comments fa-3x"></i>
                                </div>
                                <div className="col-xs-6 center-content flex-column">
                                    Tel: {telephone}<br />
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
                                    {country}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <iframe src={MAPS_IFRAME} allowFullScreen className="inner-margin"></iframe>
                <div className="contact-icons center-content inner-margin row">
                    <div className="center-content col-xs-6 col-sm-6 col-md-3">
                        <a href={github}><i className="fas fa-code-branch fa-4x"></i></a>
                    </div>
                    <div className="center-content col-xs-6 col-sm-6 col-md-3">
                        <a href={twitter}><i className="fab fa-twitter fa-4x"></i></a>
                    </div>
                    <div className="center-content col-xs-6 col-sm-6 col-md-3">
                        <a href={linkedin}><i className="fab fa-linkedin fa-4x"></i></a>
                    </div>
                    <div className="center-content col-xs-6 col-sm-6 col-md-3">
                        <a href={facebook}><i className="fab fa-facebook-f fa-4x"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.user.contact,
        location: state.user.location
    }
}

export default connect(
    mapStateToProps,
    { getSubdocument }
)(Contact);


        // this.state = {
        //     name: '',
        //     email: '',
        //     subject: '',
        //     msg: ''
        // };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    // handleChange = (ev) => {
    //     this.setState({
    //         [ev.target.name]: ev.target.value
    //     })
    // }

    // handleSubmit = (ev) => {
    //     ev.preventDefault();

    //     this.setState({
    //         name: '',
    //         email: '',
    //         subject: '',
    //         msg: ''
    //     })

    //     console.log(ev);
    // }