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

*/

import React, { Component } from 'react';
import CustomNav from './components/CustomNav';
import Main from './components/Main';
import Edit from './components/Edit';
import Error from './components/Error';

// react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// redux
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <CustomNav />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/users/edit/:username" component={Edit} />
              <Route path="/users/:username" component={Main} />
              <Route path="/*" component={Error} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

