import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Button
} from 'reactstrap';

class LocationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      location: {
        key: 'location',
        houseNumber: 0,
        street: '',
        apartment: '',
        city: '',
        state: '',
        country: '',
        zipCode: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const username = nextProps.username;
    const { houseNumber, street, apartment, city, state, country, zipCode } = nextProps.location;

    this.setState({
      username,
      location: {
        ...this.state.location,
        houseNumber,
        street,
        apartment,
        city,
        state,
        country,
        zipCode
      }
    })
  }

  handleChange = ev => {
    this.setState({
      location: {
        ...this.state.location,
        [ev.target.name]: ev.target.value
      }
    })
  }

  handleSubmit = ev => {
    ev.preventDefault();
    console.log(this.state);
  }


  render() {
    const renderFormGroup = this.props.location !== 'Loading user...' ? (
      Object.keys(this.props.location).map((key, i) => {
        if (key === 'key') return;
        return (
          <FormGroup row>
            <Label sm={2} for={key}>{key}</Label>
            <Col sm={10}>
              <Input
                type="text"
                name={key}
                id={key}
                defaultValue={this.props.location[key]}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
        )
      })
    ) : ('Loading user...');
    return (
      <React.Fragment>
        <Form className="inner-margin" onSubmit={this.handleSubmit}>
          {renderFormGroup}
          <Button>Submit</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default LocationForm;