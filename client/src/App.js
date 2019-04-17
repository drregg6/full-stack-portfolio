/*

HOW TO DESIGN IT:
- https://www.sitepoint.com/how-to-build-a-stunning-portfolio-website-as-a-web-developer/
- https://medium.freecodecamp.org/15-web-developer-portfolios-to-inspire-you-137fb1743cae

DESIGN INSPIRATION:
- http://mattfarley.ca/
- http://timmyomahony.com/
- https://themes.muffingroup.com/be/simple2/?utm_source=sitepoint.com&utm_medium=content&utm_campaign=apr19

*/

import React, { Component } from 'react';
import CustomNav from './components/CustomNav';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// reactstrap
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNav />
        <Header />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
