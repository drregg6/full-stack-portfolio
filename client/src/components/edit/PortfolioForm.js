/*

add an upload image
figure out where to place image
figure out how to render image

*/

import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updatedBody: {
        key: "portfolio",
        apps: []
      },
      currentApp: {
        name: '',
        url: '',
        image: '',
        technologies: ''
      }
    }

    this.user = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

    componentWillReceiveProps(newProps) {
    this.user = newProps.user;
    const { apps } = newProps.portfolio;
    const techString = apps.map(app => {
      return {
        ...app,
        technologies: app.technologies.join(', ')
      }
    })

    this.setState({
      updatedBody: {
        ...this.state.updatedBody,
        apps: [...techString]
      }
    });

    console.log(this.state);
  }

  handleChange = ev => {
    this.setState({
      currentApp: {
        [ev.target.name]: ev.target.value
      }
    });
  }

  handleClick = id => {
    const app = this.state.updatedBody.apps.filter(app => {
      return app._id === id;
    })
    console.log(app);
    this.setState({
      ...this.state,
      currentApp: {
        name: app[0].name,
        url: app[0].url,
        technologies: app[0].technologies,
        image: app[0].image
      }
    })
  }

  handleDelete = ev => {
    console.log('handling delete');
  }

  handleSubmit = ev => {
    ev.preventDefault();

    console.log(this.user);
  }

  render() {
    const renderOptions = this.state.updatedBody.apps[0] !== undefined ? (
      this.state.updatedBody.apps.map((app, i) => {
        return (
          <div key={app._id} style={{border: '1px solid black', padding: '.5rem', width: '50%'}}>
            <span onClick={() => { this.handleClick(app._id)} }>{app.name}</span> <span onClick={this.handleDelete} style={{background: '#f00', color: '#fff', padding: '3px 6px', borderRadius: '50%', border: 'none', cursor: 'pointer', float: 'right'}}>x</span>
          </div>
        )
      })
    ) : ('');

    const renderForm = this.state.updatedBody.apps[0] !== undefined ? (
      Object.keys(this.state.currentApp).map((key, i) => {
        if (key === 'key') return null; // for key: 'portfolio'
        if (key === '_id') return null;
        return (
          <FormGroup key={i}>
            <Label for={key}>{key}</Label>
            <Input
              type="text"
              name={key}
              id={key}
              onChange={this.handleChange}
              value={this.state.currentApp[key]}
            />
          </FormGroup>
        )
      })
    ) : ('Loading user...');

    return (
      <div className="inner-margin">
        <h1 className="inner-margin">Portfolio</h1>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {renderOptions}
        </div>
        <Form>
          {renderForm}
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default PortfolioForm;