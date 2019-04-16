import React, { Component } from 'react';

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// reactstrap
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1>Hello world!</h1>
        </Container>
      </div>
    );
  }
}

export default App;
