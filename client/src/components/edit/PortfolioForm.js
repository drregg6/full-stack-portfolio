/*

store needs to be updated once handleDelete and handleSubmit are sent

*/

import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

// redux
import { connect } from 'react-redux';
import { updateUser } from '../../actions/userActions';

class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updatedBody: {
        key: "portfolio",
        apps: []
      },
      currentApp: {
        id: '',
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
        ...this.state.currentApp,
        [ev.target.name]: ev.target.value
      }
    });
  }

  handleClick = id => {
    if (id === "0") {
      this.setState({
        ...this.state,
        currentApp: {
          id: '0',
          name: '',
          url: '',
          technologies: '',
          image: ''
        }
      })
    } else {
      const app = this.state.updatedBody.apps.filter(app => {
        return app._id === id;
      })
      this.setState({
        ...this.state,
        currentApp: {
          id: app[0]._id,
          name: app[0].name,
          url: app[0].url,
          technologies: app[0].technologies,
          image: app[0].image
        }
      })
    }
  }

  handleDelete = id => { // TODO, should be added to userActions
    console.log('handling delete');
    const updatedAppsList = this.user.portfolio.apps.filter(app => {
      return app._id !== id
    });

    const updatedUser = {
      ...this.user,
      portfolio: {
        apps: [...updatedAppsList]
      }
    };

    this.props.updateUser(updatedUser);
  }

  handleSubmit = (ev) => { // TODO
    ev.preventDefault();
    // don't forget to place technologies back into an array
    // currentApp will be placed into the updatedUser and sent to the backend

    const techArr = this.state.currentApp.technologies.split(', ');
    delete this.state.currentApp.technologies;
    const updatedApp = {
      ...this.state.currentApp,
      technologies: [...techArr]
    }

    const updatedAppsList = this.user.portfolio.apps.filter(app => {
      return app._id !== this.state.currentApp.id;
    });
    console.log(updatedAppsList);

    const updatedUser = {
      ...this.user,
      portfolio: {
        apps: [...updatedAppsList, updatedApp]
      }
    }

    // IF apps.length === 6 THROW ERROR "must delete an app first"
    // ELSE send it along
    if (techArr.length < 6) {
      this.props.updateUser(updatedUser);
      console.log(updatedUser);
    } else {
      console.log('error');
    }
  }

  render() {
    const renderOptions = this.state.updatedBody.apps[0] !== undefined ? (
      this.state.updatedBody.apps.map((app, i) => {
        return (
          <div key={app._id} style={{border: '1px solid black', padding: '.5rem', width: '50%'}}>
            <span onClick={() => { this.handleClick(app._id)} }>{app.name}</span> <span onClick={() => { this.handleDelete(app._id) }} style={{background: '#f00', color: '#fff', padding: '3px 6px', borderRadius: '50%', border: 'none', cursor: 'pointer', float: 'right'}}>x</span>
          </div>
        )
      })
    ) : ('');

    const renderForm = this.state.updatedBody.apps[0] !== undefined ? (
      Object.keys(this.state.currentApp).map((key, i) => {
        if (key === '_id' || key === 'id' || key === 'key') return null;
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
          <div key="6" style={{border: '1px solid black', padding: '.5rem', width: '50%'}}>
            <span onClick={() => { this.handleClick("0")} }>New App</span> <span onClick={this.handleDelete} style={{background: '#f00', color: '#fff', padding: '3px 6px', borderRadius: '50%', border: 'none', cursor: 'pointer', float: 'right'}}>x</span>
          </div>
        </div>
        <Form onSubmit={this.handleSubmit}>
          {renderForm}
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default connect(
  null,
  { updateUser }
)(PortfolioForm);