import React, { Component } from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

// redux
import { connect } from 'react-redux';
import { findUser } from '../../actions/userActions';

class Main extends Component {
  componentDidMount() {
    const username = this.props.match.params.username !== undefined ? (
      this.props.match.params.username
    ) : (
      'daveregg'
    )
    this.props.findUser(username);
  }

  render() {
    const user = this.props.user !== undefined ? this.props.user : 'Loading user...';

    return(
      <div>
        <Header general={user.general} />
        <Portfolio portfolio={user.portfolio} />
        <About general={user.general} information={user.information} />
        <Contact contact={user.contact} location={user.location} />
        <Footer general={user.general} contact={user.contact} />
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
)(Main);