import React, { Component } from 'react';
import {
    Container
} from 'reactstrap';

class Footer extends Component {
    render() {
        return (
            <div className="custom-footer component-margin">
                <Container>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <h6>Hello world!</h6>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <h6>Goodbye world!</h6>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Footer;