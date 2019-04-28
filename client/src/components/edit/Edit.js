/*

create a new Component ~FormGroup~
make a call to findUser and get the user object
each Form will have an object passed down
each form will have a FormGroup component

*/

import React, { Component } from 'react';
import GeneralForm from './GeneralForm';
import LocationForm from './LocationForm';
import ContactForm from './ContactForm';
import AboutForm from './AboutForm';
import PortfolioForm from './PortfolioForm';
import { Container } from 'reactstrap';

// redux
import { connect } from 'react-redux';
import { findUser } from '../../actions/userActions';

class Edit extends Component {

  componentDidMount() {
    this.props.findUser(this.props.match.params.username);
  }

  dropdownChange = ev => {
    const app = this.props.user.portfolio !== undefined ? this.props.user.portfolio.apps.filter(app => ev.target.value === app.name)[0] : 'Workin on it';
    const techString = app.technologies.join(', ')
    this.setState({
      portfolioName: app.name,
      portfolioUrl: app.url,
      portfolioImage: app.image,
      portfolioTechnologies: techString
    })
  }

  render() {
    // const user = this.props.user !== undefined ? this.props.user : 'Workin on it';
    const general = this.props.user.general !== undefined ? this.props.user.general : 'Workin on it';
    const contact = this.props.user.contact !== undefined ? this.props.user.contact : 'Workin on it';
    const location = this.props.user.location !== undefined ? this.props.user.location : 'Loading user...';

    const information = this.props.user.information !== undefined ? this.props.user.information : 'Workin on it';
    // const skills = information.skills !== undefined ? information.skills : 'Workin on it';
    // const skillsString = skills !== 'Workin on it' && skills.length !== 0 ? skills.join(', ') : '';

    // const technologies = information.technologies !== undefined ? information.technologies : 'Workin on it';
    // const technologiesString = technologies !== 'Workin on it' && technologies.length !== 0 ? technologies.join(', ') : '';

    // const languages = information.languages !== undefined ? information.languages : 'Workin on it';
    // const languagesString = languages !== 'Workin on it' && languages.length !== 0 ? languages.join(', ') : '';
    // console.log(languages);

    const portfolio = this.props.user.portfolio !== undefined ? this.props.user.portfolio : 'Workin on it';
    // const apps = portfolio.apps !== undefined && portfolio.apps.length !== 0 ? portfolio.apps : [{name: 'Add an App!', _id: 0}];

    return (
      <div className="edit-page">
        <Container>
          <GeneralForm general={general} />
          <LocationForm location={location} />
          <ContactForm />
          <AboutForm />
          <PortfolioForm />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export default connect(
  mapStateToProps,
  { findUser }
)(Edit);

    // const generalInfoForm = (
    //   <Form className="inner-margin" onClick={this.handleSubmit}>
    //     <FormGroup row>
    //       <Label sm={2} for="username">Username:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="username"
    //           id="username"
    //           defaultValue={user.username}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="firstName">First Name:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="firstName"
    //           id="firstName"
    //           defaultValue={general.firstName}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="lastName">Last Name:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="lastName"
    //           id="lastName"
    //           defaultValue={general.lastName}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="email">Email:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="email"
    //           name="email"
    //           id="email"
    //           defaultValue={contact.email}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="telephone">Telephone Number:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="telephone"
    //           id="telephone"
    //           defaultValue={contact.telephone}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="github">Github:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="github"
    //           id="github"
    //           defaultValue={contact.github}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="twitter">Twitter:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="twitter"
    //           id="twitter"
    //           defaultValue={contact.twitter}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="facebook">Facebook:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="facebook"
    //           id="facebook"
    //           defaultValue={contact.facebook}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="linkedin">linkedIn:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="linkedin"
    //           id="linkedin"
    //           defaultValue={contact.linkedin}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="houseNumber">House Number:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="number"
    //           name="houseNumber"
    //           id="houseNumber"
    //           defaultValue={location.houseNumber}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="street">Street:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="street"
    //           id="street"
    //           defaultValue={location.street}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="apartment">Address2:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="apartment"
    //           id="apartment"
    //           defaultValue={location.apartment}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="city">City:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="city"
    //           id="city"
    //           defaultValue={location.city}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="state">State:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="state"
    //           id="state"
    //           defaultValue={location.state}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="zipCode">Zip Code:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="zipCode"
    //           id="zipCode"
    //           defaultValue={location.zipCode}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="country">Country:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="country"
    //           id="country"
    //           defaultValue={location.country}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="skills">Skills:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="skills"
    //           id="skills"
    //           defaultValue={skillsString}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="technologies">Technologies:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="technologies"
    //           id="technologies"
    //           defaultValue={technologiesString}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="languages">Languages:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           name="languages"
    //           id="languages"
    //           defaultValue={languagesString}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <Button>Update</Button>
    //   </Form>
    // )

    // const portfolioForm = (
    //   <Form className="inner-margin">
    //     <FormGroup row>
    //       <Label sm={2} for="portfolioOptions">List of Apps:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="select"
    //           id="portfolioOptions"
    //           name="portfolioOptions"
    //           onChange={this.dropdownChange}
    //         >
    //           {apps.map(app => {
    //             return (
    //               <option
    //                 key={app._id}
    //                 value={app.name}
    //                 label={app.name}
    //               >
    //               {app.name}
    //               </option>
    //             )
    //           })}
    //         </Input>
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="portfolioName">App Name:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           id="portfolioName"
    //           name="portfolioName"
    //           defaultValue={this.state.portfolioName}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="portfolioUrl">Url:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           id="portfolioUrl"
    //           name="portfolioUrl"
    //           defaultValue={this.state.portfolioUrl}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="portfolioImage">Image:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           id="portfolioImage"
    //           name="portfolioImage"
    //           defaultValue={this.state.portfolioImage}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <FormGroup row>
    //       <Label sm={2} for="portfolioTechnologies">Technologies:</Label>
    //       <Col sm={10}>
    //         <Input
    //           type="text"
    //           id="portfolioTechnologies"
    //           name="portfolioTechnologies"
    //           defaultValue={this.state.portfolioTechnologies}
    //           onChange={this.handleChange}
    //         />
    //       </Col>
    //     </FormGroup>
    //     <Button>Update</Button>
    //   </Form>
    // )