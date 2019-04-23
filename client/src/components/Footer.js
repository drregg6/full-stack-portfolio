import React, { Component } from 'react';
import {
  Container
} from 'reactstrap';

// redux
import { connect } from 'react-redux';
import { getSubdocument } from '../actions/userActions';

class Footer extends Component {
  render() {
    let today = new Date();
    const YEAR = today.getFullYear();
    return (
      <div className="custom-footer" style={{display: 'flex', justifyContent: 'space-around'}}>
        <span>&copy;{YEAR} &mdash; <a href="http://www.github.com/drregg6">Dave Regg</a></span>
        <span><a href="#home">&#11205;</a></span>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        information: state.user.general
    }
}

export default connect(
    mapStateToProps,
    { getSubdocument }
)(Footer);