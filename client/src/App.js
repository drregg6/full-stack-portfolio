/*

INSPIRATION:
- https://themes.muffingroup.com/be/simple2/?utm_source=sitepoint.com&utm_medium=content&utm_campaign=apr19

HOW TO DESIGN IT:
- https://www.sitepoint.com/how-to-build-a-stunning-portfolio-website-as-a-web-developer/
- https://medium.freecodecamp.org/15-web-developer-portfolios-to-inspire-you-137fb1743cae

DESIGN INSPIRATION:
- http://mattfarley.ca/
- http://timmyomahony.com/

TODO:
- Style Contact Form
- Complete email submission in Contact form
- Create User creation / edit pages
- Create "See more portfolios..." page
- Make DaveRegg Portfolio default route
- this.props.history('/')

*/

import React, { Component } from 'react';
import CustomNav from './components/CustomNav';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// redux
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  componentWillMount() {
      axios.get('/api/users')
        .then(res => {
          console.log(res.data);
        });
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CustomNav />
          <Header />
          <Portfolio />
          <About />
          <Contact />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
