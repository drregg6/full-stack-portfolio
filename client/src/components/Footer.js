import React, { Component } from 'react';
import {
  Container
} from 'reactstrap';

class Footer extends Component {
  render() {
    let today = new Date();
    const YEAR = today.getFullYear();
    return (
      <div className="custom-footer" style={{display: 'flex', justifyContent: 'space-around'}}>
        <span>&copy;{YEAR} &mdash; <a href="http://www.github.com/drregg6">Dave Regg</a></span>
        <span><a href="#home">&#11205; Up &#11205;</a></span>
      </div>
    )
  }
}

export default Footer;