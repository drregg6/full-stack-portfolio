/*

when updated, send a flash message
username is pointless - erase once PortfolioForm is complete

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
    const user = this.props.user !== undefined ? this.props.user : 'Loading user...';
    const username= this.props.match.params.username;
    const general = this.props.user.general !== undefined ? this.props.user.general : 'Loading user...';
    const contact = this.props.user.contact !== undefined ? this.props.user.contact : 'Loading user...';
    const location = this.props.user.location !== undefined ? this.props.user.location : 'Loading user...';

    const information = this.props.user.information !== undefined ? this.props.user.information : 'Loading user...';
    const portfolio = this.props.user.portfolio !== undefined ? this.props.user.portfolio : 'Loading user...';

    return (
      <div className="edit-page">
        <Container>
          <GeneralForm general={general} user={user} />
          <LocationForm location={location} user={user} />
          <ContactForm contact={contact} user={user} />
          <InformationForm information={information} user={user} />
          <PortfolioForm portfolio={portfolio} username={username} user={user} />
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