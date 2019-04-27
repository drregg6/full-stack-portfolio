import React, { Component } from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

class Main extends Component {
  render() {
    const username = this.props.match.params.username !== undefined ? (
        this.props.match.params.username
      ) : (
        'daveregg'
      );
    console.log(username);
    return(
      <div>
        <Header username={username} />
        <Portfolio username={username} />
        <About username={username} />
        <Contact username={username} />
        <Footer username={username} />
      </div>
    )
  }
}

export default Main;