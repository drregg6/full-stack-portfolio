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
