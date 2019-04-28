import React, { Component } from 'react';

class Footer extends Component {

  render() {
    let today = new Date();
    const YEAR = today.getFullYear();

    const { github } = this.props.contact !== undefined ? this.props.contact : 'Loading user...';
    const { firstName, lastName } = this.props.general !== undefined ? this.props.general : 'Loading user...';
    const fullName = firstName + ' ' + lastName;
    return (
      <div className="custom-footer" style={{display: 'flex', justifyContent: 'space-around'}}>
        <span>&copy;{YEAR} &mdash; <a href={github}>{fullName}</a></span>
        <span><a href="#home">&#11205;</a></span>
      </div>
    )
  }
}

export default Footer;