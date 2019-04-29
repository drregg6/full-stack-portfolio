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
import InformationForm from './InformationForm';
import PortfolioForm from './PortfolioForm';
import { Container } from 'reactstrap';

// redux
import { connect } from 'react-redux';
import { findUser } from '../../actions/userActions';

class Edit extends Component {

  componentDidMount() {
    this.props.findUser(this.props.match.params.username);
  }

  render() {
    // const user = this.props.user !== undefined ? this.props.user : 'Workin on it';
    const general = this.props.user.general !== undefined ? this.props.user.general : 'Loading user...';
    const contact = this.props.user.contact !== undefined ? this.props.user.contact : 'Loading user...';
    const location = this.props.user.location !== undefined ? this.props.user.location : 'Loading user...';

    const information = this.props.user.information !== undefined ? this.props.user.information : 'Workin on it';


    const portfolio = this.props.user.portfolio !== undefined ? this.props.user.portfolio : 'Loading user...';
    // const apps = portfolio.apps !== undefined && portfolio.apps.length !== 0 ? portfolio.apps : [{name: 'Add an App!', _id: 0}];

    return (
      <div className="edit-page">
        <Container>
          <GeneralForm general={general} />
          <LocationForm location={location} />
          <ContactForm contact={contact} />
          <InformationForm information={information} />
          <PortfolioForm portfolio={portfolio} />
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