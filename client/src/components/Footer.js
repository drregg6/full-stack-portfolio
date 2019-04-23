import React, { Component } from 'react';
import {
  Container
} from 'reactstrap';

// redux
import { connect } from 'react-redux';
import { getSubdocument } from '../actions/userActions';

class Footer extends Component {
  componentDidMount() {
    this.props.getSubdocument('daveregg');
    this.props.getSubdocument('daveregg', 'contact');
  }

  render() {
    let today = new Date();
    const YEAR = today.getFullYear();

    const { github } = this.props.contact;
    const { firstName, lastName } = this.props.general;
    const fullName = firstName + ' ' + lastName;
    return (
      <div className="custom-footer" style={{display: 'flex', justifyContent: 'space-around'}}>
        <span>&copy;{YEAR} &mdash; <a href={github}>{fullName}</a></span>
        <span><a href="#home">&#11205;</a></span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        general: state.user.general,
        contact: state.user.contact
    }
}

export default connect(
    mapStateToProps,
    { getSubdocument }
)(Footer);