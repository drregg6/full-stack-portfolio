import React, { Component } from 'react';
import CustomNav from './CustomNav';
import {
    Container,
    Button
} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <div className="custom-header">
                        <h1>
                            Dave<br />
                            Regg
                        </h1>
                        <h2>Web Dev</h2>
                        <Button outline color="primary">My work &rarr;</Button>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default Header;